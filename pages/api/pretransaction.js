import { request } from "https";
import connectDb from "../../middlewear/mongoose";
import PaytmChecksum from "paytmchecksum";
const handler = async (req, res) => {
  const MID = process.env.PAYTM_MID;
  const MKEY = process.env.PAYTM_MKEY;
  if (req.method == `POST`) {
    var paytmParams = {};
    paytmParams.body = {
      requestType: "Payment",
      mid: MID,
      websiteName: "YOUR_WEBSITE_NAME",
      orderId: req.body.OID,
      callbackUrl: "https://localhost:3000/api/postTransaction",
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
              let ress = JSON.parse(response).body;
              ress.success = true;
              resolve(ress);
            });
          });
          post_req.write(post_data);
          post_req.end();
        } catch (error) {
          console.log(error);
        }
      });
    };
    let myr = await requestAsync();
    res.status(200).json(myr);
  }
};
export default connectDb(handler);
