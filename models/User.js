import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, min: 3, max: 20 },
    email: {
      type: String,
      unique: true,
      required: true,
      unique: true,
      max: 50,
    },
    password: { type: String, min: 6, required: true },
    phone: { type: Number },
  },
  { timestamps: true }
);
mongoose.models={};
export default mongoose.model("User", UserSchema);
