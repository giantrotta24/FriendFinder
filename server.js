//require
const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

//port
const PORT = process.env.PORT || 8080;

//enabling data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//calling on my routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listening for PORT connection
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});