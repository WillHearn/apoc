import Squad from '../models/squad';

export function getSquads(req, res) {
  Squad.find().sort('-dateAdded').exec((err, squads) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ squads });
  });
}
