import connectDb from "../../middlewear/mongoose";
import Order from "../../models/Order";
const handler = async (req, res) => {
  if (req.method == "POST") {
    await Order.findOneAndUpdate(
      { orderId: req.body.ORDERID },
      { status: "Success", paymentInfo: JSON.stringify(req.body) }
    );
    res.redirect(`/postcheckout?orderId=${req.body.ORDERID}`, 200);
  }
};
export default connectDb(handler);
