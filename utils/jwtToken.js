const jwt = require("jsonwebtoken"); // Make sure to require the jwt library
const dotenv = require("dotenv");


dotenv.config();
// create token and saving that in cookies
const sendToken = (user, statusCode, res) => {
  // Options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "none",
    secure: true,
  };

  // Sign the JWT token

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: '7d',
  });


  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
