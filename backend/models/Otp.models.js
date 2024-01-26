const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender.utils");
const otpTemplate  = require("../mails/emailVerificationTemplate");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60,
  },
});

async function sendVerificationEmail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email",
      otpTemplate(otp)
    );
    console.log("Email sent successfully", mailResponse);
  } catch (error) {
    console.log("Error Occured While Sending Mails: " + error);
    throw error;
  }
}

otpSchema.pre("save", async function (next) {
  if (this.isnew) {
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});

const Otp = mongoose.model("Otp", otpSchema);
module.exports = Otp;
