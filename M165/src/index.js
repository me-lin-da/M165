require("dotenv").config();

let mongoose = require("mongoose");
let express = require("express");
const port = 3000;
const router = express.Router();
let app = express();
let indexRouter = require("./routes/route");
const bodyParser = require("body-parser");
const { CompanySeeder } = require("./models/data/companyData");
const { EmployeeSeeder } = require("./models/data/employeeData");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", indexRouter);

async function runCompanySeeders() {
  const companySeeder = new CompanySeeder();
  await companySeeder.seed();
}

async function runEmployeeSeeders() {
  const employeeSeeder = new EmployeeSeeder();
  await employeeSeeder.seed();
}

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://root:root@localhost:27017/mydb");
    await runCompanySeeders();
    await runEmployeeSeeders();
  } catch (error) {
    console.log(error);
  }
}

connectToDatabase();

const mongodb = mongoose.connection;

mongodb.on("error", (error) => console.error(error));
mongodb.once("open", () => console.log("Connected to DB "));

app.listen(port, () => {
  console.log(`Server running at http://localhost:3000/`);
});
