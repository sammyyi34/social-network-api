const { User } = require('../models');

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json('hi');
    } catch (err) {
      res.status(500).json(err);
    }
  },
};