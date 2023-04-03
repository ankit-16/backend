const express = require('express');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const crmAuthRouter = require('./routes/crmAuth')
const crmApiRouter = require('./routes/crmApi')
const { isValidAdminToken } = require('./controllers/crmControllers/authJwtController');
const helpers = require('./helpers')
require('dotenv').config({ path: '.variables.env' });
const errorHandlers = require('./handlers/errorHandlers');

const app = express();

//initializes and configures middleware for the Express app
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// This middleware sets some local variables on the response object 
//that will be used in the rendering of views, such as a helpers object,
//information about the current user, and the current URL path. 
//This information can be used to dynamically generate content 
//or to highlight the active page in a navigation menu.

app.use((req, res, next) => {
    res.locals.h = helpers;
    res.locals.admin = req.admin || null;
    res.locals.currentPath = req.path;
    next();
});


app.use(cors({
  origin: true,
  credentials: true,
  exposedHeaders: ["Content-Length"],
  allowedHeaders: [
    "Accept",
    "Authorization",
    "x-auth-token",
    "Content-Type",
    "X-Requested-With",
    "Range"
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}));

app.use(
    '/api', 
    cors({
        origin: true,
        credentials: false,
    }),
    crmAuthRouter
);


app.use(
    '/api',
    cors({
      origin: true,
      credentials: true,
    }),
    isValidAdminToken,
   crmApiRouter
);
// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

// done! we export it so we can start the site in start.js
module.exports = app;
