// create an express app
const express = require("express")
const routes = require("./routes/routes");
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);


// start the server listening for requests
app.listen(process.env.PORT || 5000, 
	() => console.log("Server is running..."));