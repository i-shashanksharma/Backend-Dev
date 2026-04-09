const jwt = require('jsonwebtoken');

function mfaMiddleware(req, res, next) {
  const token = req.headers['authorization'];
  const otp = req.headers['x-otp'];

  if (!token || !otp) {
    return res.status(401).json({ error: 'Missing token or OTP' });
  }

  try {
    const decoded = jwt.verify(token, 'secretKey'); // Replace with env secret
    if (otp !== '123456') { // Replace with dynamic OTP system
      return res.status(403).json({ error: 'Invalid OTP' });
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = mfaMiddleware;