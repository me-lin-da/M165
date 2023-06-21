const { Seeder } = require("mongoose-data-seed");
const employeeModel = require("../employee");

const data = [
  {
    firstName: "Tehran",
    lastName: "Doroudchi",
    birthYear: 1998,
  },
  {
    firstName: "Lin",
    lastName: "Sinzig",
    birthYear: 2005,
    nationality: "Swiss",
  },
  {
    firstName: "Ricky",
    lastName: "Staub",
    birthYear: 2006,
  },
  {
    firstName: "Andri",
    lastName: "Luthi",
    birthYear: 2004,
    nationality: "Swiss",
  },
  {
    firstName: "Loic",
    lastName: "Imhof",
    birthYear: 2003,
  },
  {
    firstName: "Jan",
    lastName: "Jackson",
    birthYear: 2000,
    nationality: "Swiss",
  },
  {
    firstName: "David",
    lastName: "Reymond",
    birthYear: 1990,
  },
  {
    firstName: "Paulo",
    lastName: "Lalicata",
    birthYear: 1989,
    nationality: "Italian",
  },
  {
    firstName: "Ben",
    lastName: "Ambuhl",
    birthYear: 2000,
  },
  {
    firstName: "Nico",
    lastName: "Luthi",
    birthYear: 1999,
  },
];

class EmployeeSeeder extends Seeder {
  async shouldRun() {
    console.log(employeeModel.count);
    return employeeModel
      .countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return employeeModel.create(data);
  }

  async seed() {
    if (await this.shouldRun()) {
      return this.run();
    }
    return null;
  }
}

module.exports = {
  EmployeeSeeder,
};
