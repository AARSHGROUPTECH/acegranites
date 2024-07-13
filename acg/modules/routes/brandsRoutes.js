const express = require("express");
const router = express.Router();
// const isAuth = require("../middleware/auth");

//Import Controller
const {
  createBrandsController,
  getBrandsController,
  updateBrandsController,
  deleteBrandsController,
} = require("../controllers/brandsController");
//Route configure

//Routes
router.post("/admin/create-brands", createBrandsController);
router.get("/admin/get-brands", getBrandsController);
router.put("/admin/update-brands/:id", updateBrandsController);
router.delete("/admin/delete-brands/:id", deleteBrandsController);

module.exports = router;
