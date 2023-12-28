import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const connectString =
  "mongodb://user1:user1@ecommerce-db-1.qbkuopt.mongodb.net/"; 

class MongooseDb {
  instance: MongooseDb | undefined;

  constructor() {
    this.connect();
  }

  connect() {
    if (process.env.NODE_ENV !== "dev") {
      mongoose.set("debug", true);
      mongoose.set("debug", {
        color: true,
      });
    }

    mongoose
      .connect(connectString)
      .then((_) => console.log("Connected to Mongoose db successfully"));
  }

  getInstance() {
    if (!this.instance) this.instance = new MongooseDb();
  }
}

export default MongooseDb;
