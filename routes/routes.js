const Router = require("express");
const router = Router();

const {
  createProvince,
  getProvinceById,
  updateProvincia,
  getProvinciasByName,
  getProvinciasEnabled,
  getProvinces
} = require("../controllers/provincia");

const {
  createMunicipio,
  getMunicipioById,
  getMunicipiosEnabled,
  getMunicipios,
  getMunicipiosByProvincia,
  getMunicipiosByProvinciaEnabled,
  updateMunicipio,
} = require("../controllers/municipio");

const {
  createUser,
  getUsers,
  updateUser,
  loginUser,
  getUserById,
  getUsersEnabled,
  getUsersByRol,
} = require("../controllers/user");


// provinces routes
router.get("/provincias/:id", getProvinceById);
router.get("/provincias/enabled/:enabled", getProvinciasEnabled);
router.put("/provincias/:id", updateProvincia);
router.get("/provincias/name/:name", getProvinciasByName);
router.get("/provincias", getProvinces);
router.post("/provincias", createProvince);


// Municipio Routes
router.get("/municipios/:id", getMunicipioById);
router.get("/municipios/provincia/:id", getMunicipiosByProvincia);
router.get(
  "/municipios/provincia/enabled/:enabled",
  getMunicipiosByProvinciaEnabled
);
router.get("/municipios/enabled/:enabled", getMunicipiosEnabled);
router.post("/municipios", createMunicipio);
router.put("/municipios/:id", updateMunicipio);
router.get("/municipios", getMunicipios);

// User Routes
router.post("/users", createUser);
router.post("/login", loginUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.get("/users/enabled/:enabled", getUsersEnabled);
router.get("/users/rol/:id", getUsersByRol);
router.get("/users", getUsers);


module.exports = router;
