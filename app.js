// create an express app
const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 5000;
//const routes = require("./routes/routes");
const app = express();
app.use(cors());

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})


// start the server listening for requests
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

//https://github.com/pg0408/lorem-ipsum-demo.git
