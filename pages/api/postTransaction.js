import connectDb from "../../middlewear/mongoose";
import Order from "../../models/Order";
import Product from "../../models/Product";
const handler = async (req, res) => {
  if (req.method == "POST") {
    const tempProduct = await Order.findOneAndUpdate(
      { orderId: req.body.ORDERID },
      { status: "Success", paymentInfo: JSON.stringify(req.body) },
      { new: true }
    );
    const cart = tempProduct.productInfo;
    for (let object of cart) {
      if (object.color) {
        let product = await Product.findById(object._id);
        const cl = object.color;
        const sz = object.size;
        Object.keys(product._color).forEach((item) => {
          if (item == cl) {
            Object.keys(product._color[item]).forEach((obj) => {
              if (obj == sz) {
                console.log(product._color[item][obj]);
                product._color[item][obj] =
                  product._color[item][obj] - object.cartQuantity;
                return;
              }
            });
          }
        });
        product.availableQty = product.availableQty - object.cartQuantity;
        await Product.findByIdAndUpdate(object._id, product);
        console.log(product);
      } else if (object.size) {
        let product = await Product.findById(object._id);
        const val = object.size;
        product.size.val = product.size.val - object.cartQuantity;
        await Product.findByIdAndUpdate(object._id, product);
      } else {
        let product = await Product.findById(object._id);
        product.availableQty = product.availableQty - object.cartQuantity;
        await Product.findByIdAndUpdate(object._id, product);
      }
    }
    res.redirect(`/postcheckout?orderId=${req.body.ORDERID}`, 200);
  }
};
export default connectDb(handler);
