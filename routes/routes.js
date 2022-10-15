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
router.get("/provincias", getProvinces);
router.get("/provincias/:id", getProvinceById);
router.get("/provincias/enabled/:enabled", getProvinciasEnabled);
router.post("/provincias", createProvince);
router.put("/provincias/:id", updateProvincia);
router.get("/provincias/name/:name", getProvinciasByName);




module.exports = router;
