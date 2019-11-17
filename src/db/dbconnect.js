const mongoose = require("mongoose");

// const connectionURL = `mongodb://127.0.0.1:27017/employee-db`;
const connectionURL = `mongodb+srv://pat123:7Smvi850zst35HYx@cluster0-wprtj.mongodb.net/employeesdb?retryWrites=true&w=majority`
mongoose.connect(connectionURL, {
  useCreateIndex: true,
  useNewUrlParser: true
}, (err) => {
    if (!err) {
      return console.log('db connected...');
    }
});
