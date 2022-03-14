const { temmModel } = require("../models");

const temcController = {
  async createDocument({ params, body }, res) {
    // TODO add a .catch to the below: e.g.: dataOne.create(body).catch(err => {code for error handling})
    const resOfCreate = await temmModel.create(body);
    res.json(resOfCreate);
  },

  async readAllDocuments(req, res) {
    const resOfReadAll = await temmModel.find();
    res.json(resOfReadAll);
  },

  async updateDocumentById({ params, body }, res) {
    const resOfUpdateById = await temmModel.findByIdAndUpdate(
      { _id: params.id },
      body,
      { returnDocument: "after" }
    );
    res.json(resOfUpdateById);
  },

  async deleteDocumentById({ params, body }, res) {
    const resOfDeleteById = await temmModel.deleteOne({ _id: params.id });
    res.json(resOfDeleteById);
  },
};

module.exports = temcController;
