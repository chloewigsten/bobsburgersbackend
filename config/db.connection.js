const mongoose = require('mongoose');
const {MONGODB_URI} = process.env
const PORT = process.env.PORT || 3000

mongoose.connect(MONGODB_URI)

mongoose.connection
  .on("open", () => console.log("You're are connected to mongoose"))
  .on("close", () => console.log("You're are disconnected from mongoose"))
  .on("error", (error) => console.log(error));
