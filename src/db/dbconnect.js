const mongoose = require("mongoose");
 const connectionURL = `mongodb://127.0.0.1:27017/employee-db`;
mongoose.connect(connectionURL, {
  useCreateIndex: true,
  useNewUrlParser: true
}, (err) => {
    if (!err) {
      return console.log('db connected...');
    }
});
