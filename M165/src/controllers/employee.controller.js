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

        return EmployeeModel.updateOne({_id: _id}, {firstName: firstName}, function(err){
          if (err) {
            return res.status(400).json({ message: "reset password link error" })
            }else{
              transport.sendMail(data, (err)=>{
                if (err) {
                  return console.log(err);
              }
              res.status(200).json({message: "Email to reset your password has been sent"})
            })
        }})
            }

        


module.exports = {
    getAllEmployees,
    newEmployee,
    updateEmployee
};  