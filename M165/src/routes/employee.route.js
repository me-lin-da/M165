
const { getAllEmployees, newEmployee } = require("../controllers/employee.controller");

const express = require("express");
const router = express.Router();

router.get('/', getAllEmployees)

router.post('/employee', newEmployee)

module.exports = router;
