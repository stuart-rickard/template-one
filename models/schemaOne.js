const { Schema, model, Types } = require("mongoose");

const subDataSchema = new Schema({
  // set custom id to avoid confusion with parent _id
  subId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  trimmedString: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const dataOneSchema = new Schema(
  {
    requiredString: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    // subDocument
    subData: [subDataSchema],
  },
  {
    toJSON: {
      // virtuals: true,
      // getters: true,
    },
    id: false,
  }
);

const dataOne = model("dataOne", dataOneSchema);

module.exports = dataOne;
