const jwt = require("jsonwebtoken");
const secret = "4881TimberOakDrive";

const auth = {
  sign: (info) => {
    return jwt.sign(info, secret);
  },
  validate: () => {
    return "TODO";
  }
};


module.exports = {auth, secret};
