import User from "../../models/User";
import connectDb from "../../middlewear/mongoose";
import CryptoJS from "crypto-js";
const handler = async (req, res) => {
  const secKey = process.env.SECRET_KEY_CRYPTO.toString();
  if (req.method === `POST`) {
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        const bytes = CryptoJS.AES.decrypt(user.password, secKey);
        const decryptPass = bytes.toString(CryptoJS.enc.Utf8);
        if (req.body.email == user.email && req.body.password == decryptPass) {
          return res
            .status(200)
            .json({ success: true, name: user.name, email: user.email });
        }
      }
      return res
        .status(400)
        .json({ success: false, error: "Invalid Credentials" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: "Internal server errorr" });
    }
  } else {
    res
      .status(400)
      .json({ success: false, error: "This method is not allowed" });
  }
};
export default connectDb(handler);
