const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors"); // 1. Import CORS
const blogRoutes = require("./routes/blog");

const app = express();

// 2. Middleware

app.use(cors()); // 3. Use CORS middleware

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from blogApp");
});

app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // console.log("Connected to MongoDB");
  })
  .catch((error) => {
    // console.log(error);
  });

app.listen(PORT, () => {
  // console.log(`Server running on port ${PORT}`);
});
