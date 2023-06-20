const {
  getAllCompanies,
  newCompany,
  updateCompany,
  deleteCompany,
  getCompanyById,
} = require("../controllers/company.controller");
const {
  deleteEmployee,
  updateEmployee,
  getAllEmployees,
  getEmployeById,
  newEmployee,
} = require("../controllers/employee.controller");

const express = require("express");
const router = express.Router();

//emloyee
router.get("/employee", getAllEmployees);

router.get("/employee/:id", getEmployeById);

router.post("/employee", newEmployee);

router.put("/employee", updateEmployee);

router.delete("/employee/:id", deleteEmployee);

//company
router.get("/company", getAllCompanies);

router.get("/company/:id", getCompanyById);

router.post("/company", newCompany);

router.put("/company", updateCompany);

router.delete("/company/:id", deleteCompany);

module.exports = router;
