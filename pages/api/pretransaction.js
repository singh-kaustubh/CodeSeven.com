import { request } from "https";
import connectDb from "../../middlewear/mongoose";
import PaytmChecksum from "paytmchecksum";
import Order from "../../models/Order";
const handler = async (req, res) => {
  const MID = process.env.NEXT_PUBLIC_PAYTM_MID;
  const MKEY = process.env.PAYTM_MKEY;
  if (req.method == `POST`) {
    const o = new Order({
      orderId: req.body.OID,
      productInfo: req.body.items,
      email: req.body.email,
      address: req.body.address,
      amount: req.body.total,
      hasShipping:req.body.hasShipping
    });
    await o.save();
    var paytmParams = {};
    paytmParams.body = {
      requestType: "Payment",
      mid: MID,
      websiteName: "YOUR_WEBSITE_NAME",
      orderId: req.body.OID,
      callbackUrl: "http://localhost:3000/api/posttransaction",
      txnAmount: {
        value: req.body.total,
        currency: "INR",
      },
      userInfo: {
        custId: req.body.email,
      },
    };
    const checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      MKEY
    );
    paytmParams.head = {
      signature: checksum,
    };
    var post_data = JSON.stringify(paytmParams);
    const requestAsync = async () => {
      return new Promise((resolve, reject) => {
        try {
          var options = {
            hostname: "securegw-stage.paytm.in",
            port: 443,
            path: `/theia/api/v1/initiateTransaction?mid=${MID}&orderId=${req.body.OID}`,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Content-Length": post_data.length,
            },
          };
          var response = "";
          var post_req = request(options, function (post_res) {
            post_res.on("data", function (chunk) {
              response += chunk;
            });
            post_res.on("end", function () {
              resolve(JSON.parse(response).body);
            });
          });
          post_req.write(post_data);
          post_req.end();
        } catch (error) {
          console.log(error);
        }
      });
    };
    let myResponse = await requestAsync();
    res.status(200).json(myResponse);
  }
};
export default connectDb(handler);
