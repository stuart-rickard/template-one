const { Schema, model, Types } = require("mongoose");

// const subDataSchema = new Schema({
//   // set custom id to avoid confusion with parent _id
//   subId: {
//     type: Schema.Types.ObjectId,
//     default: () => new Types.ObjectId(),
//   },
//   trimmedString: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

const temsSchema = new Schema({
  aString: {
    type: String,
    default: "default",
  },

  // TODO: fill in more commented typical code

  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  //   // subDocument
  //   subData: [subDataSchema],
  // },
  // {
  //   toJSON: {
  //     // virtuals: true,
  //     // getters: true,
  //   },
  //   id: false,
});

const temmModel = model("temdDb", temsSchema);

module.exports = temmModel;
