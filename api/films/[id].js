const films = require('../../db.json').films;

module.exports = (req, res) => {
  const { id } = req.query;
  const film = films.find(f => f.id === id);

  if (req.method === 'GET') {
    if (film) {
      res.status(200).json(film);
    } else {
      res.status(404).json({ message: 'Film not found' });
    }
  } else if (req.method === 'PATCH') {
    if (film) {
      const { tickets_sold } = JSON.parse(req.body);
      film.tickets_sold = tickets_sold;
      res.status(200).json(film);
    } else {
      res.status(404).json({ message: 'Film not found' });
    }
  } else if (req.method === 'DELETE') {
    const index = films.findIndex(f => f.id === id);
    if (index !== -1) {
      films.splice(index, 1);
      res.status(200).json({ message: 'Film deleted' });
    } else {
      res.status(404).json({ message: 'Film not found' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};