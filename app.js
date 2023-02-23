const express = require("express");
const app = express();
const expressJsonParser = require("./expressJsonParser");

app.use(expressJsonParser); 
app.post("/test",  (req, res) => {
  // Access the request body
  const requestBody = req.body;
  console.log(requestBody);
  res.send("Request body parsed successfully!");
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});

module.exports = server;
