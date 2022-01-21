const jwt = require("jsonwebtoken");

const sign = (userId) => {
  const identityData = {
    userId,
  };
  const token = jwt.sign(identityData, process.env.PRIVATE_KEY, {
    expiresIn: "1h",
  });

  return token;
};

const verify = (token) => {
  return jwt.verify(token, process.env.PRIVATE_KEY);
};

module.exports = {
  sign,
  verify,
};
