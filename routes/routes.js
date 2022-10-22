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

const {
  createRol,
  getRolById,
  getRols,
  getRolsEnabled,
  updateRol,
  getRolsByFuncionalidad,
} = require("../controllers/rol");

const {
  getFuncionalidadById,
  getFuncionalidades,
  getFuncionalidadesEnabled,
  updateFuncionalidad,
  createFuncionalidad,
} = require("../controllers/funcionalidad");

const { getConditions, writeConditions } = require("../controllers/terms");

// provinces routes
router.post("/provincias", createProvince);
router.put("/provincias/:id", updateProvincia);
router.get("/provincias/:id", getProvinceById);
router.get("/provincias/enabled/:enabled", getProvinciasEnabled);
router.get("/provincias/name/:name", getProvinciasByName);
router.get("/provincias", getProvinces);


// Municipio Routes
router.get("/municipios/:id", getMunicipioById);
router.get("/municipios/provincia/:id", getMunicipiosByProvincia);
router.get(
  "/municipios/provincia/enabled/:enabled",
  getMunicipiosByProvinciaEnabled
);
router.post("/municipios", createMunicipio);
router.put("/municipios/:id", updateMunicipio);
router.get("/municipios/enabled/:enabled", getMunicipiosEnabled);
router.get("/municipios", getMunicipios);

// User Routes
router.post("/login", loginUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.get("/users/enabled/:enabled", getUsersEnabled);
router.get("/users/rol/:id", getUsersByRol);
router.get("/users/:id", getUserById);
router.get("/users", getUsers);

// Rol Routes
router.get("/rols", getRols);
router.get("/rols/:id", getRolById);
router.get("/rols/enabled/:enabled", getRolsEnabled);
router.post("/rols", createRol);
router.put("/rols/:id", updateRol);
router.get("/funcionalidades/rols/:id", getRolsByFuncionalidad);


// Condition Routes
router.get("/condiciones", getConditions);
router.post("/condiciones", writeConditions);

module.exports = router;
