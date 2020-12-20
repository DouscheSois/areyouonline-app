const mongoose = require("mongoose");
const config = require("config");

const mongoDatabase = config.get("MongoURI");

const mongoConnection = async () => {
  try {
    await mongoose.connect(mongoDatabase, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB is connected..!");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = mongoConnection;
