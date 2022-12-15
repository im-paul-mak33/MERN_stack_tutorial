// const mongoose = require("mongoose");
// This is just reference and comparision purpose with prisma schema.
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String },
});
