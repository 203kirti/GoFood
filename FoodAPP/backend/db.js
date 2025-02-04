const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://dipeshdodke15:Dipesh%401511@online-food.xgkzq.mongodb.net/GoFood?retryWrites=true&w=majority&appName=Online-Food";
// const mongoURL = "mongodb://dipeshdodke15:Dipesh%401511@online-food-shard-00-00.xgkzq.mongodb.net:27017,online-food-shard-00-01.xgkzq.mongodb.net:27017,online-food-shard-00-02.xgkzq.mongodb.net:27017/GoFood?ssl=true&replicaSet=atlas-7l8okx-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Online-Food"

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("connected successfully!");
    //Access collecttion Items
    const food_items = await mongoose.connection.db.collection("Items").find({}).toArray();
    const food_category = await mongoose.connection.db.collection("Category").find({}).toArray();
    global.food_items = food_items;
    global.food_category = food_category;
    console.log();
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Forcefully exit the process on failure
  }
};

module.exports = mongoDB;

