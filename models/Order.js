import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema(
  {
    orderId: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    paymentInfo: { type: String },
    address: { type: Object, required: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true, default: "Pending" },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Order", OrderSchema);
