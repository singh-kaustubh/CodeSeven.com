import connectDb from "../../middlewear/mongoose";
const handler = async (req, res) => {
  if (req.method == `POST`) {
    const email = `We have sent you this email in response to your request to reset your password on CodeSeven.com After you reset your password, any credit card information stored in My Account will be deleted as a security measure.
    <br/><br/>
    To reset your password, please follow the link below:

    <a href="${reset - password - url}">Click here</a>

    <br/><br/>

    We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to your My Account Page and changing the password.

    <br/><br/>`;
    res
      .status(200)
      .json({
        success: true,
        message: "Email has been sent to you Email address",
      });
  } else {
    return res.status(400).json({ success: false, error: "Invalid method!" });
  }
};
export default connectDb(handler);
