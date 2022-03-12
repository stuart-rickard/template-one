const { dataOne } = require("../models");

const dataOneController = {
  async newData({ params, body }, res) {
    // console.log(params);
    const dataOneCreate = await dataOne.create(body);
    res.json(dataOneCreate);
  },
};

module.exports = dataOneController;

// const reqstr = {
//   requiredString: "test template",
// };

// dataOne.create();
