// create an express app
const express = require("express")
const PORT = process.env.PORT || 5000;
const routes = require("./routes/routes");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.static("public"));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);


// start the server listening for requests
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
