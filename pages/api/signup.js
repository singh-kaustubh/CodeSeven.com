import User from "../../models/User";
import connectDb from "../../middlewear/mongoose";
import CryptoJS from "crypto-js";
const handler = async (req, res) => {
  const secKey = process.env.SECRET_KEY_CRYPTO.toString();
  if (req.method === `POST`) {
    try {
      if (req.body.password !== req.body.cpassword) {
        return res
          .status(400)
          .json({ error: "The two passwords do not match, please try again" });
      }
      let u = new User({
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, secKey).toString(),
        phone: req.body.phone,
      });
      await u.save();
      res.status(200).json({ success: "Done!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server errorr" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler);
