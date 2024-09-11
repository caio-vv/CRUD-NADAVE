const Caneta = require("../models/caneta_model.js");

const store = async (req, res) => {
  await Caneta.create(req.body);
  res.json();
};

const index = async (req, res) => {
  const content =  await Caneta.find().exec();
  res.json(content)
};

const show = async (req, res) => {
    const content = await Caneta.findById(req.params.id).exec()
    res.json(content)
}

const update = async (req, res) => {
    await Caneta.findByIdAndUpdate(req.params.id, req.body).exec()
    res.json()
}

const destroy = async (req, res) => {
    await Caneta.findByIdAndDelete(req.params.id).exec()
    res.json()
}

module.exports = {store, index, show, update, destroy}