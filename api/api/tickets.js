const tickets = require('../db.json').tickets;

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { film_id, number_of_tickets } = JSON.parse(req.body);
    const newTicket = {
      id: Date.now().toString(),
      film_id,
      number_of_tickets
    };
    tickets.push(newTicket);
    res.status(201).json(newTicket);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};