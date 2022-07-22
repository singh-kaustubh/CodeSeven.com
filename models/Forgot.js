import mongoose from "mongoose";
const ForgotSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
      max: 50,
    },
    phone: { type: Number, required: true, unique: true },
    token: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.models.Forgot || mongoose.model("Forgot", ForgotSchema);
