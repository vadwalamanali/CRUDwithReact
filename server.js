const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path=require('path');
// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));


app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(express.static('public'))

//app.use(express.static(path.join(__dirname, '/frontend/build')));

app.all('/*',function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


app.get("/", (req, res) => {
  //res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'))
  res.json({ message: "Welcome." });
});

require("./app/routes/turorial.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
