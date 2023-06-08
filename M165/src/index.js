require("dotenv").config();

let mongoose = require('mongoose');
let express = require("express");
const port = 3000;
const router = express.Router();
let app = express();
let indexRouter =require("./routes/employee.route")
app.use("/", indexRouter);

mongoose.connect("mongodb://root:root@localhost:27017/mydb")
const mongodb = mongoose.connection

mongodb.on('error', (error) => console.error(error))
mongodb.once('open', () => console.log("Connected to DB "))

app.listen(port, () => {
  console.log(`Server running at http://localhost:3000/`);
});

