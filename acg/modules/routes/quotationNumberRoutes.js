const express = require("express");
const router = express.Router();
// const isAuth = require("../middleware/auth");

//Import Controller
const {
  createquotationNumberController,
  getquotationNumberController,
} = require("../controllers/quotationNumberController");

//Route configure
router.post("/admin/create-quotationnumber", createquotationNumberController);
router.get("/admin/get-quotationnumber", getquotationNumberController);

module.exports = router;
