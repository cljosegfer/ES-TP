const mongoose = require("mongoose");

const userModel = mongoose.model("user");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const users = await userModel.paginate({}, { page, limit: 10 }); // page: page

    return res.json(users);
  },

  async store(req, res) {
    console.log("req.body :>> ", req.body);
    const user = await userModel.create(req.body);

    return res.json(user);
  },

  async show(req, res) {
    const user = await userModel.findById(req.params.id);

    return res.json(user);
  },

  async update(req, res) {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(user);
  },

  async destroy(req, res) {
    await userModel.findByIdAndRemove(req.params.id);

    return res.send();
  },
};
