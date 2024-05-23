const express = require("express");
const router = express.Router();

//Import Controller
const {
  createQuotationController,
  getQuotationController,
  updateQuotationController,
  deleteQuotationController,
} = require("../controllers/quotationController");
//Route configure

//Routes
router.post("/admin/create-quotation", createQuotationController);
router.get("/admin/get-quotation", getQuotationController);
router.put("/admin/update-quotation/:id", updateQuotationController);
router.delete("/admin/delete-quotation/:id", deleteQuotationController);

module.exports = router;
