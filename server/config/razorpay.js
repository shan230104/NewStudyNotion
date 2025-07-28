const Razorpay = require('razorpay');


if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
    exports.instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
} else {
    exports.instance = null;
    console.warn("WARNING: Razorpay keys are not provided. Razorpay integration will be disabled.");
   
}
