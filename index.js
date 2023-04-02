const mongoose = require('mongoose');
const glob = require('glob');
const path = require('path');
const app = require('./app');

require("dotenv").config({ path: ".env" });


//connection to database
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`Error -> ${err.message}`);
});

// loading all the models in the models directory to be used by the application to interact with the database

glob.sync('./models/**/*.js').forEach(function (file) {
    require(path.resolve(file));
});

//start our server
app.set('port', process.env.PORT || 80);
const server = app.listen(app.get('port'), () => {
    console.log(`Server is running on PORT : ${server.address().port}`);
})