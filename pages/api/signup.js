import User from "../../models/User";
import connectDb from "../../middlewear/mongoose";
const handler = async (req, res) => {
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
        password: req.body.password,
        phone: req.body.phone,
      });
      await u.save();
      console.log(req.body);
      res.status(200).json({ success: "Done!" });
    } catch (error) {
      res.status(500).json({ error: "Internal server errorr" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler);
