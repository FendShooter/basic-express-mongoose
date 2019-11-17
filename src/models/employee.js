const mongoose = require("mongoose");
const validator = require("validator");
const employeeSchema = mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: "put something looo",
    validate(value) {
      if (validator.isEmpty(value)) {
        throw new Error();
      }
    }
  },
  email: {
    type: String,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    }
  },
  mobile: {
    type: String,
    trim: true,
    required: "put something looo in mobile",
    validate(value) {
      if (validator.isEmpty(value)) {
        throw new Error();
      }
    }
  },
  regis: {
    default: Date.now(),
    type: Date
  }
});

module.exports = employeeSchema;
