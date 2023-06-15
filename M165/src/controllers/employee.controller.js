let express = require("express");
let router = express.Router();
const app = express();
const EmployeeModel = require("../models/employee")

const getAllEmployees = (async (req, res)=> { 
    let results = await EmployeeModel.find({})
    .limit(50);
    
  res.send(results).status(200);

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

    const updateEmployee = async (req, res)=> {
    
      try {
        const myquery = { firstName: "ricky" };
        const newvalues = { $set: { lastName: "Micky" } };
    
        await EmployeeModel.updateOne(myquery, newvalues);
    
        // The code below assumes you have defined the 'transport' and 'data' variables.
            
        res.status(200).json({ newvalues });
      } catch (err) {
        console.error(err);
        res.status(400).json({ err});
      }
            }

        


module.exports = {
    getAllEmployees,
    newEmployee,
    updateEmployee
};  