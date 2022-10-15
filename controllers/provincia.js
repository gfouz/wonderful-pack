//const { provincias } = require("./db.js");

const provincias = [
  {
    id: 1,
    name: "Pinar de Río",
    enabled: true,
  },
  {
    id: 2,
    name: "La Habana",
    enabled: true,
  },
  {
    id: 3,
    name: "Mayabeque",
    enabled: true,
  },
  {
    id: 4,
    name: "Matanzas",
    enabled: false,
  },
  {
    id: 5,
    name: "Cienfuegos",
    enabled: false,
  },
  {
    id: 6,
    name: "Villa Clara",
    enabled: false,
  },
  {
    id: 7,
    name: "Camaguey",
    enabled: false,
  },
  {
    id: 8,
    name: "Las Tunas",
    enabled: true,
  },
  {
    id: 9,
    name: "Holguín",
    enabled: true,
  },
  {
    id: 10,
    name: "Granma",
    enabled: false,
  },
  {
    id: 11,
    name: "Santiago de Cuba",
    enabled: true,
  },
  {
    id: 12,
    name: "Guantanamo",
    enabled: true,
  },
];

var provinciaIdCounter = provincias.length;

exports.getProvinces = (req, res) => {
    const result = provincias.map((item) => item);
    res.status(200).json({ message: "all-items", result });
};
exports.getProvinciasByName = (req, res) => {
  const name = req.params.name;
  const result = provincias.find( item => item.name === name );
    res.status(200).json({ result, message: "gotten-by-name" })
};

exports.createProvince = (req, res) => {
  const province = {
    id: ++provinciaIdCounter,
    name: req.body.name,
    enabled: true,
  };
  provincias.push(province);
  res.status(201).json({ message: "created" });
};
//this is okey!
exports.getProvinceById = (req, res) => {
  const { id } = req.params;
  const result = provincias.find((item) => item.id === parseInt(id));
    res.status(200).json({ result, message: "gotten-by-id" });
};

exports.getProvinciasEnabled = (req, res) => {
  const result = provincias.filter((item) => (item.enabled === true ));
  res.status(200).json({ result, message: "enabled" });
};

exports.updateProvincia = (req, res) => {

  const id = parseInt(req.params.id);
  const name = req.body.name;
  const enabled = req.body.enabled;

  const result = {
    id: id,
    name: req.body.name,
    enabled: Boolean(enabled),
  };
  provincias[id - 1] = result;
  res.status(201).json({ message: "updated" });
};
