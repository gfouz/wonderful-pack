// create an express app
const express = require("express")
const PORT = process.env.PORT || 5000;
const routes = require("./routes/routes");
const app = express();

app.use(express.static("public"));


app.get('/', (req, res) => res.render('index'));


// start the server listening for requests
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
