const express = require("express");
const port = process.env.PORT|| 6060;
const app = express();

// serve static assets
app.use(express.static(__dirname + "/styleguide"));

app.listen(port);
console.log("server started on port " + port);
