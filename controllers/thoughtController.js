const { User, Thought } = require('../models');

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json('hi');
    } catch (err) {
      res.status(500).json(err);
    }
  },
};