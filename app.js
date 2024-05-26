// create an express app
const express = require("express")
const app = express()
const path = require('path');
// use the express-static middleware
//app.use(express.static("public"))
app.use(express.static(path.join(__dirname, 'public')));
// define the first route
app.get("/test", function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index2.html'));
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));