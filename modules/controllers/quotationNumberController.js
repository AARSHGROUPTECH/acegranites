const quotationNumberModel = require("../models/QuotationNumberModel");

// createquotationNumberController
const createquotationNumberController = async (req, res) => {
  // try {
    const { quotationNumber } = req.body;

    const createquotationNumber = await quotationNumberModel.create({
      quotationNumber: quotationNumber,
    });

    if (!createquotationNumber) {
      return res.status(404).send({
        success: false,
        message: "Invalid credential quotationNumber API",
      });
    }

    res.status(200).send({
      success: true,
      message: "quotationNumber created successfully API",
      createquotationNumber,
    });
  // } catch (error) {
  //   res.status(500).send({
  //     success: false,
  //     message: "quotationNumber creation getting error API",
  //     error,
  //   });
  // }
};

// getquotationNumberController
const getquotationNumberController = async (req, res) => {
  try {
    const data = await quotationNumberModel.find({});

    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Invalid credential quotationNumber API",
      });
    }

    res.status(200).send({
      success: true,
      message: "quotationNumber get successfully API",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Invalid credential quotationNumber API",
    });
  }
};

//Exports controller
module.exports = {
  createquotationNumberController,
  getquotationNumberController,
};
