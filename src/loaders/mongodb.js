const Mongoose = require("mongoose");

const db = Mongoose.connection;

db.once("open", () => {
  console.log("connection established on mongodb");
});

const connectDB = async () => {
  const { DB_URI } = process.env;
  Mongoose.connect(`${DB_URI}`, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  });
};

module.exports = async ()=> await connectDB();
