require('dotenv').config({ path: '.env' });

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

async function createAdmin() {
  try {
    const Admin = require('../models/Admin');
    var newAdmin = new Admin();
    const passwordHash = newAdmin.generateHash('Admin@1234');

    await new Admin({
      email: 'admin@demo.com',
      password: passwordHash,
      name: 'Ankit',
      surname: 'Gupta',
    }).save();
    console.log('👍👍👍👍👍👍👍👍 Admin created : Done!');
    process.exit();
  } catch (e) {
    console.log('\n👎👎👎👎👎👎👎👎 Error! The Error info is below');
    console.log(e);
    process.exit();
  }
}
createAdmin();