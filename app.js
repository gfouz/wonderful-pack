const express = require("express");
var path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const routes = require("./routes/routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

//https://github.com/pg0408/lorem-ipsum-demo.git
//https://wonderful-pack.herokuapp.com/provincias
//wonderful-pack.herokuapp.com
