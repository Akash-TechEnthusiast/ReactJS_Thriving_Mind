const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.listen(5000, () => {
    console.log("Server is listening at http://localhost:5000");
});


const Razorpay = require("razorpay");
const instance = new Razorpay({
    key_id: 'rzp_test_wnjdEzJ5z4LQq9',
    key_secret: 'VvuLrKSQXCNpce8pFCpJCMr1',
});


app.get("/order", (req, res) => {
    try {
      const options = {
        amount: 1 * 100, // amount == Rs 10
        currency: "INR",
        receipt: "receipt#1",
        payment_capture: 0,
   // 1 for automatic capture // 0 for manual capture
      };
    instance.orders.create(options, async function (err, order) {
      if (err) {
        return res.status(500).json({
          message: "Something Went Wrong",
        });
      }
    return res.status(200).json(order);
   });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
   }
  });



  app.post("/capture/:paymentId", (req, res) => {
    try {
      return request(
       {
       method: "POST",
      
       //url: `https://${config.RAZOR_PAY_KEY_ID}:${config.RAZOR_PAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
       url: `https://rzp_test_wnjdEzJ5z4LQq9:VvuLrKSQXCNpce8pFCpJCMr1@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
       form: {
          amount: 1 * 100, // amount == Rs 10 // Same As Order amount
          currency: "INR",
        },
      },
     async function (err, response, body) {
       if (err) {
        return res.status(500).json({
           message: "Something Went Wrong",
         }); 
       }
        console.log("Status:", response.statusCode);
        console.log("Headers:", JSON.stringify(response.headers));
        console.log("Response:", body);
        return res.status(200).json(body);
      });
    } catch (err) {
      return res.status(500).json({
        message: "Something Went Wrong",
     });
    }
  });



