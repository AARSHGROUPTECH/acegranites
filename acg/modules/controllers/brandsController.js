const brandsModel = require("../models/brandsModel");

// createBrandsController
const createBrandsController = async (req, res) => {
  try {
    const { brandsName } = req.body;

    const createBrands = await brandsModel.create({
      brandsName: brandsName,
    });

    if (!createBrands) {
      return res.status(404).send({
        success: false,
        message: "Invalid credential BrandsType API",
      });
    }

    res.status(200).send({
      success: true,
      message: "BrandsType created successfully API",
      createBrands,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "BrandsType creation getting error API",
      error,
    });
  }
};

// getBrandsController
const getBrandsController = async (req, res) => {
  try {
    const data = await brandsModel.find({});

    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Invalid credential BrandsType API",
      });
    }

    res.status(200).send({
      success: true,
      message: "BrandsType get successfully API",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Invalid credential BrandsType API",
    });
  }
};

// updateBrandsController
const updateBrandsController = async (req, res) => {
  try {
    const { brandsName } = req.body;

    //Validation
    if (!brandsName) {
      return res.status(404).send({
        success: false,
        message: "Please Provide BrandsType fields",
      });
    }

    //get BrandsType data
    const BrandsData = await brandsModel.findById(req.params.id);
    if (!BrandsData) {
      return res.status(404).send({
        success: false,
        message: "BrandsType update get error API",
      });
    }

    //Updateion
    if (brandsName) BrandsData.brandsName = brandsName;

    // save File
    await BrandsData.save();
    res.status(200).send({
      success: true,
      message: "BrandsType data update Successfully API",
    });
  } catch (error) {
    // console.log("BrandsType update getting error", error);
    res.status(500).send({
      success: false,
      message: "BrandsType update getting error",
      error,
    });
  }
};

// deleteBrandsController
const deleteBrandsController = async (req, res) => {
  try {
    // get BrandsType data
    const deleteBrandsType = await brandsModel.findByIdAndDelete({
      _id: req.params.id,
    });

    // console.log("deleteBrandsType", deleteBrandsType);

    if (!deleteBrandsType) {
      return res.status(400).send({
        success: false,
        message: "delete BrandsType fields not found error API",
      });
    }

    // save File
    res.status(200).send({
      success: true,
      message: "BrandsType fields delete Successfully API",
      deleteBrandsType,
    });
  } catch (error) {
    // console.log("BrandsType fields delete getting error API", error);
    res.status(500).send({
      success: false,
      message: "BrandsType fields delete getting error API",
      error,
    });
  }
};

//Exports controller
module.exports = {
  createBrandsController,
  getBrandsController,
  updateBrandsController,
  deleteBrandsController,
};
