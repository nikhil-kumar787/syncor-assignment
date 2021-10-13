const HSN = require("./hsnModel");

exports.createHSN = async (req, res) => {
  const { hsn, description, UQC, cap_limit } = req.body;

  if (!hsn || !description || !UQC || !cap_limit) {
    return res.status(400).json({ message: "Please enter appopriate fields" });
  } else {
    const hsn = new HSN({ hsn, description, UQC, cap_limit });

    const createdHSN = await hsn.save();

    res.status(201).json(createdHSN);
  }
};

exports.getAll = async (req, res) => {
  const hsn = await HSN.find();

  if (!hsn) {
    res.status(404).json({ message: "Not found any data" });
  }
  res.status(200).json({
    success: true,
    hsn,
  });
};

exports.getById = async (req, res) => {
  const hsn = await HSN.find({ hsn: req.params.id });
  if (!hsn) {
    res.status(404).json({ message: "Not found any data" });
  }
  res.status(200).json({
    success: true,
    hsn,
  });
};
