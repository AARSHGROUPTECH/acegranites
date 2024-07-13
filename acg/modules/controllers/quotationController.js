const quotationModel = require("../models/quotationModel");
const adminModel = require("../models/adminModel");

// createQuotationController
const createQuotationController = async (req, res) => {
  try {
    const {
      quotationNumber,
      client,
      quotationDate,
      projectType,
      unit,
      dimensionLength,
      dimensionWidth,
      dimensionDepth,
      volumeLtr,
      durationHr,
      flowRate,
    } = req.body;

    //Validation
    if (
      !quotationNumber ||
      !client ||
      !quotationDate ||
      !projectType ||
      !unit ||
      !dimensionLength ||
      !dimensionWidth ||
      !dimensionDepth ||
      !volumeLtr ||
      !durationHr ||
      !flowRate
    ) {
      return res.status(404).send({
        success: false,
        message: "Please Provide all Quotation fields",
      });
    }

    // createQuotation
    const createQuotation = await quotationModel.create({
      quotationNumber,
      client,
      quotationDate,
      projectType,
      unit,
      dimensionLength,
      dimensionWidth,
      dimensionDepth,
      volumeLtr,
      durationHr,
      flowRate,
    });

    if (!createQuotation) {
      return res.status(404).send({
        success: false,
        message: "Quotation Fields Create get error API",
      });
    }

    // console.log("createQuotation", createQuotation);

    // save File
    res.status(200).send({
      success: true,
      message: "Quotation Created Successfully API",
      createQuotation,
    });
  } catch (error) {
    // console.log("Quotation create getting error", error);
    res.status(500).send({
      success: false,
      message: "Quotation create getting error",
      error,
    });
  }
};

// getQuotationController
const getQuotationController = async (req, res) => {
  try {
    const getQuotation = await quotationModel.find({});

    if (!getQuotation) {
      return res.status(404).send({
        success: false,
        message: "Quotation data getting faild API",
      });
    }

    // console.log("getQuotation", getQuotation);
    return res.status(200).send({
      success: true,
      message: "Quotation getting Successfully API",
      getQuotation,
    });
  } catch (error) {
    // console.log("Quotation Data getting error", error);
    res.status(500).send({
      success: false,
      message: "Quotation Data getting error",
      error,
    });
  }
};

// updateQuotationController
const updateQuotationController = async (req, res) => {
  try {
    const {
      quotationNumber,
      client,
      quotationDate,
      projectType,
      unit,
      dimensionLength,
      dimensionWidth,
      dimensionDepth,
      volumeLtr,
      durationHr,
      flowRate,
    } = req.body;

    //Validation
    if (
      !quotationNumber ||
      !client ||
      !quotationDate ||
      !projectType ||
      !unit ||
      !dimensionLength ||
      !dimensionWidth ||
      !dimensionDepth ||
      !volumeLtr ||
      !durationHr ||
      !flowRate
    ) {
      return res.status(404).send({
        success: false,
        message: "Please Provide all Quotation fields",
      });
    }

    // get quotationData
    const quotationData = await quotationModel.findById(req.params.id);
    if (!quotationData) {
      return res.status(404).send({
        success: false,
        message: "Quotation update get error API",
      });
    }

    //Updateion
    if (quotationNumber) quotationData.quotationNumber = quotationNumber;
    if (client) quotationData.client = client;
    if (quotationDate) quotationData.quotationDate = quotationDate;
    if (projectType) quotationData.projectType = projectType;
    if (unit) quotationData.unit = unit;
    if (dimensionLength) quotationData.dimensionLength = dimensionLength;
    if (dimensionWidth) quotationData.dimensionWidth = dimensionWidth;
    if (dimensionDepth) quotationData.dimensionDepth = dimensionDepth;
    if (volumeLtr) quotationData.volumeLtr = volumeLtr;
    if (durationHr) quotationData.durationHr = durationHr;
    if (flowRate) quotationData.flowRate = flowRate;

    // save File
    await quotationData.save();
    res.status(200).send({
      success: true,
      message: "Quotation data update Successfully API",
      quotationData,
    });
  } catch (error) {
    // console.log("Admin update getting error", error);
    res.status(500).send({
      success: false,
      message: "Admin update getting error",
      error,
    });
  }
};

// deleteQuotationController
const deleteQuotationController = async (req, res) => {
  try {
    // get Quotation data
    const delteQuotation = await quotationModel.findByIdAndDelete({
      _id: req.params.id,
    });

    // console.log("delteQuotation", delteQuotation);

    if (!delteQuotation) {
      return res.status(400).send({
        success: false,
        message: "Quotation delete get error API",
      });
    }

    // save File
    res.status(200).send({
      success: true,
      message: "Quotation data delete Successfully API",
      delteQuotation,
    });
  } catch (error) {
    // console.log("Quotation data delete getting error API", error);
    res.status(500).send({
      success: false,
      message: "Quotation data delete getting error API",
      error,
    });
  }
};

//Exports controller
module.exports = {
  createQuotationController,
  getQuotationController,
  updateQuotationController,
  deleteQuotationController,
};
