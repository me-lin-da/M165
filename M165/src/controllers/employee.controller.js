let express = require("express");
let router = express.Router();
const app = express();
const EmployeeModel = require("../models/employee")

const getAllEmployees = ((req, res)=> { 
    // EmployeeModel.find();
    EmployeeModel.find()

}  )

const newEmployee = async (req, res)=> {
    const user = new EmployeeModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName
      });
      try {
        const newUser = await user.save();
        res.status(201).json(newUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }


module.exports = {
    getAllEmployees,
    newEmployee
};  