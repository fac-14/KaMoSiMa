const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const auth = {
  sign: (info, options) => {
    const signed = jwt.sign(info, secret, options);
    if (options === "") {
      options = {};
    }
    return signed;
  },
  validate: token => {
    try {
      return jwt.verify(token, secret);
    } catch (err) {
      throw new Error(err);
    }
  }
};

module.exports = { auth, secret };
