const jwt = require("jsonwebtoken")
const Auth = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        res.status(400).json({ message: "Please login first" })
    }
    jwt.verify(token, process.env.Privatekey, (err, decoded) => {
        if (err) {
            res.status(400).json({ message: "Invalid token" })
        }
        req.user = decoded.UserID
    });
    next()
}
module.exports = Auth