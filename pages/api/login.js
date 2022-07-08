import User from "../../models/User";
import connectDb from "../../middlewear/mongoose";
const handler = async (req, res) => {
  if (req.method === `POST`) {
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        if (
          req.body.email == user.email &&
          req.body.password == user.password
        ) {
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
