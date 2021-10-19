// import dependencies - mongoose
const mongoose = require("mongoose");

// open mongoose's connection to mongoDB and set parameters
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/bark-side-of-the-moon",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// export connection to server.js
module.exports = mongoose.connection;
