//require
const express = require("express");
const app = express();

//port
const PORT = process.env.PORT || 8080;

//enabling data parsing through express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//calling on my routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listening for PORT connection
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});