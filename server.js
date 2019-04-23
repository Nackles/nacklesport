// Modules
let express = require("express");
let exphbs = require("express-handlebars");

// If there is a process.env.PORT: use it, otherwise: PORT = 8080.
let PORT = process.env.PORT || 8080;

// Configuring Express
let app = express();
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

// Require routes
require("./routes/htmlRoutes.js");

// Express listener
app.listen(PORT);
console.log("PORT:", PORT);
