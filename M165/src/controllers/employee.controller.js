let express = require("express");
let router = express.Router();
const app = express();

const getAllEmployees = ((req, res)=> { 
    // EmployeeModel.find();
    res.end("Hello, World!")

}  )


module.exports = {
    getAllEmployees
};  