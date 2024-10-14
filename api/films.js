const films = require('../db.json').films;

module.exports = (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(films);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};