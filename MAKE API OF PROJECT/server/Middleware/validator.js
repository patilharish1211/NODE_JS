const validator = (req, res, next) => {
    const { role } = req.user; // Assuming req.user is set by an authenticator middleware
  
    if (role !== 'Admin') {
      return res.status(403).json({ error: 'Access denied. Admins only' });
    }
  
    next();
  };
  
  module.exports = validator;