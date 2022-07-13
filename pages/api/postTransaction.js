import connectDb from "../../middlewear/mongoose";
const handler = (req, res) => {
  res.status(200).json({ body: req.body });
};
export default connectDb(handler);
