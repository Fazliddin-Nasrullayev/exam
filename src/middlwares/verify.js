 
const jwt = require("jsonwebtoken")

 const verifyToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.redirect("/api/login");
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
    if (err instanceof jwt.TokenExpiredError) {
      return res.redirect("/api/login");
    }

    if (err instanceof jwt.JsonWebTokenError) {
      return res.redirect("/api/login");
    }
    next();
  });
};

module.exports = verifyToken;