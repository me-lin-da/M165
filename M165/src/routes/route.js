
const { getAllCompanies, newCompany, updateCompany, deleteCompany } = require("../controllers/company.controller");
const {deleteEmployee, updateEmployee, getAllEmployees, newEmployee } = require("../controllers/employee.controller");

const express = require("express");
const router = express.Router();

router.get('/employee', getAllEmployees)

router.post('/employee', newEmployee)

router.put('/employee', updateEmployee)

router.delete('/employee/:id', deleteEmployee)

router.get('/company', getAllCompanies)

router.post('/company', newCompany)

router.put('/company', updateCompany)

router.delete('/company/:id', deleteCompany)
module.exports = router;
