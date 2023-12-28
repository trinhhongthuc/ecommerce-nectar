import mongoose from "mongoose";

const uri =
  "mongodb+srv://user1:<password>@ecommerce-db-1.qbkuopt.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
class MongooseDB {
  constructor() {
    this.connectToMongooseDB;
  }

  async connectToMongooseDB() {
    try {
      mongoose.connect(uri);

      mongoose.connection;
      console.log("e");
    } catch (e) {
      console.log(e);
    }
  }
}

export default MongooseDB;
