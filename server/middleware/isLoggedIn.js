const jwt = require("jsonwebtoken");

const isLoggedIn = (req, res, next) => {
  try{
    const cookie = req.cookies[process.env.JWT_SECRET_KEY];
    const { user } = jwt.verify(cookie, process.env.JWT_SECRET);
    req.user = user;
    next();
  }catch(err){
    res.status(401).json({ msg: 'Unauthorized User' })
  }
}

module.exports = {
    isLoggedIn
}