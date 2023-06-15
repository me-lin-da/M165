let express = require("express");
let router = express.Router();
const app = express();
const CompanyModel = require("../models/company")

const getAllCompanies = (async (req, res)=> { 
    let results = await CompanyModel.find({})
    .limit(50);
    
  res.send(results).status(200);

}  )

const newCompany = async (req, res)=> {
    const company = new CompanyModel({
      name: req.body.name,
      city: req.body.city
       
          });
      try {
        const newCompany = await company.save();
        res.status(201).json(newCompany);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }

    const updateCompany = async (req, res)=> {
    
      try {
        const myquery = { _id: req.body._id };
        const newvalues = { $set: { name: req.body.name, city: req.body.city } };

        await CompanyModel.updateOne(myquery, newvalues);
    
        // The code below assumes you have defined the 'transport' and 'data' variables.
            
        res.status(200).json({ newvalues });
      } catch (err) {
        console.error(err);
        res.status(400).json({ err});
      }
            }

    const deleteCompany = async (req, res) =>{
      const { id } = req.params;

      try {
        await CompanyModel.findByIdAndDelete(id);
    
        res.status(200).json({ message: 'Employee deleted successfully' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while deleting the employee' });
      }
    }

        


module.exports = {
    getAllCompanies,
    newCompany,
    updateCompany,
    deleteCompany
};  