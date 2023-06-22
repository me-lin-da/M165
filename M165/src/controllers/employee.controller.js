let express = require("express");
const EmployeeModel = require("../models/employee");

const getAllEmployees = async (req, res) => {
  let results = await EmployeeModel.find({}).limit(50);

  if (results) {
    res.send(results).status(200);
  } else {
    res.status(204);
  }
};

const getEmployeById = async (req, res) => {
  const { id } = req.params;

  let results = await EmployeeModel.findOne({ _id: id });
  if (results) {
    res.send(results).status(200);
  } else {
    res
      .send({ message: "employee with id: " + id + " doesnt exist" })
      .status(204);
  }
};

const newEmployee = async (req, res) => {
  const user = new EmployeeModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    company: req.body.company,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const myquery = { _id: req.body._id };
    const newvalues = {
      $set: { lastName: req.body.lastName, firstName: req.body.firstName },
    };

    await EmployeeModel.updateOne(myquery, newvalues);

    res.status(200).json({ newvalues });
  } catch (err) {
    console.error(err);
    res.status(400).json({ err });
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    await EmployeeModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the employee" });
  }
};

module.exports = {
  getAllEmployees,
  newEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeById,
};
