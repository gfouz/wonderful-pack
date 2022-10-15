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


// provinces routes
router.get("/provincias/:id", getProvinceById);
router.get("/enabled", getProvinciasEnabled);
router.put("/provincias/:id", updateProvincia);
router.get("/name", getProvinciasByName);
router.get("/provincias", getProvinces);
router.post("/provincias", createProvince);






module.exports = router;
