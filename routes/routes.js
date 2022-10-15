const Router = require("express");
const router = Router();

const {
  getProvinces,
  createProvince,
  getProvinceById,
  updateProvincia,
  getProvinciasByName,
  getProvinciasEnabled,
} = require("../controllers/provincia");


// provinces routes
router.get("/provincias/:id", getProvinceById);
router.get("/provincias/enabled/:enabled", getProvinciasEnabled);
router.put("/provincias/:id", updateProvincia);
router.get("/provincias/name/:name", getProvinciasByName);
router.get("/provincias", getProvinces);
router.post("/provincias", createProvince);






module.exports = router;
