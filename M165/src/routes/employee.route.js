
const { updateEmployee, getAllEmployees, newEmployee } = require("../controllers/employee.controller");

const express = require("express");
const router = express.Router();

router.get('/', getAllEmployees)

router.post('/employee', newEmployee)

router.put('/update', updateEmployee)

module.exports = router;
