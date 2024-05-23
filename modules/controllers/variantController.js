const fileSystem = require("file-system");
const fs = require("fs");
fileSystem.readFile === fs.readFile;
const variantModel = require("../models/variantModel");

// createVariantController
const createVariantController = async (req, res) => {
  try {
    const { variantName, unitPrice, productName, serviceName, description } =
      req.body;

    // Validation;
    if (
      !variantName ||
      !unitPrice ||
      !productName ||
      !description ||
      !serviceName
    ) {
      return res.status(404).send({
        success: false,
        message: "Please Provide all variant fields API",
      });
    }

    // createvariant
    const createvariant = await variantModel.create({
      productName: productName,
      variantName: variantName,
      unitPrice: unitPrice,
      description: description,
      serviceName: serviceName,
      variantFile: req.files.variantFile[0].path,
    });

    if (!createvariant) {
      return res.status(404).send({
        success: false,
        message: "variant Fields Create get error API",
      });
    }

    // save File
    await createvariant.save();
    res.status(200).send({
      success: true,
      message: "variant Created Successfully API",
      createvariant,
    });
  } catch (error) {
    // console.log("business create getting error", error);
    res.status(500).send({
      success: false,
      message: "variant create getting error",
    });
  }
};

// getVariantController
const getVariantController = async (req, res) => {
  try {
    // this is the Component Id
    let data = await variantModel.find({});

    if (!data) {
      return res.status(404).send({
        success: false,
        message: "variant data getting faild API",
      });
    }

    // console.log("getVariant", data);
    return res.status(200).send({
      success: true,
      message: "getVariant getting Successfully API",
      data,
    });
  } catch (error) {
    // console.log("getVariant Data getting error", error);
    res.status(500).send({
      success: false,
      message: "getVariant Data getting error",
    });
  }
};

// updateVariantController
const updateVariantController = async (req, res) => {
  try {
    const { variantName, unitPrice, productName, description, serviceName } =
      req.body;

    //get variant data
    const variantData = await variantModel.findById(req.params.id);
    if (!variantData) {
      return res.status(404).send({
        success: false,
        message: "variant update get error API",
      });
    }

    //Updateion
    if (variantName) variantData.variantName = variantName;
    if (unitPrice) variantData.unitPrice = unitPrice;
    if (productName) variantData.productName = productName;
    if (description) variantData.description = description;
    if (serviceName) variantData.serviceName = serviceName;

    //variantFile
    if (variantData.variantFile) {
      fs.unlink("." + variantData.variantFile, (err) => {
        if (err) {
          // console.log(err);
        }
      });
    }

    if (
      Array.isArray(req.files.variantFile) &&
      req.files.variantFile.length > 0
    ) {
      await fs.promises.unlink(variantData.variantFile);
      variantData.variantFile = req.files.variantFile[0].path;
    }

    if (!variantData) {
      return res.status(404).send({
        success: false,
        message: "Admin Profile update get error API",
      });
    }

    // save File
    await variantData.save();
    res.status(200).send({
      success: true,
      message: "variant data update Successfully API",
    });
  } catch (error) {
    // console.log("variant update getting error", error);
    res.status(500).send({
      success: false,
      message: "variant update getting error",
    });
  }
};

// deleteVariantController
const deleteVariantController = async (req, res) => {
  try {
    // get variant data
    const deleteVariant = await variantModel.findByIdAndDelete({
      _id: req.params.id,
    });

    // console.log("deleteVariant", deleteVariant);

    if (!deleteVariant) {
      return res.status(400).send({
        success: false,
        message: "delete deleteVariant fields not found error API",
      });
    }

    // save File
    res.status(200).send({
      success: true,
      message: "variant fields delete Successfully API",
      deleteVariant,
    });
  } catch (error) {
    // console.log("variant fields delete getting error API", error);
    res.status(500).send({
      success: false,
      message: "variant fields delete getting error API",
    });
  }
};

//Exports controller
module.exports = {
  createVariantController,
  getVariantController,
  updateVariantController,
  deleteVariantController,
};
