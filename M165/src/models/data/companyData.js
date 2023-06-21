const { Seeder } = require("mongoose-data-seed");
const companyModel = require("../company");

const data = [
  {
    name: "Noser",
    city: "Bern",
    LocationCode: 1,
  },
  {
    name: "Noser",
    city: "Zurich",
    LocationCode: 2,
    EmployeeCount: 10,
  },
  {
    name: "ID",
    city: "Basel",
    LocationCode: 3,
  },
  {
    name: "MSP",
    city: "London",
    LocationCode: 4,
    EmployeeCount: 12,
  },
  {
    name: "Noser",
    city: "New York",
    LocationCode: 5,
  },
  {
    name: "Microsoft",
    city: "Los Angeles",
    LocationCode: 6,
  },
  {
    name: "Apple",
    city: "Paris",
    LocationCode: 7,
    EmployeeCount: 9,
  },
  {
    name: "Nike",
    city: "Rome",
    LocationCode: 8,
  },
  {
    name: "Adidas",
    city: "Milan",
    LocationCode: 9,
  },
  {
    name: "IMS",
    city: "Turin",
    LocationCode: 10,
  },
];

class CompanySeeder extends Seeder {
  async shouldRun() {
    console.log(companyModel.count);
    return companyModel
      .countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return companyModel.create(data);
  }

  async seed() {
    if (await this.shouldRun()) {
      return this.run();
    }
    return null;
  }
}

module.exports = {
  CompanySeeder,
};
