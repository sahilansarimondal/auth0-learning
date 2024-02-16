import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: "string", required: true },
  email: { type: "string" },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
