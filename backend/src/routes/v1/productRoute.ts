import express from "express";

import reportController from "../../controllers/v1/reportController";
import productController from "../../controllers/v1/productController";
import productValidators from "../../utils/productValidators";

const router = express.Router();

router.get("/:id/reports", reportController.getReportsByProductId);
router.post("/", productValidators.createProductValidators, productController.createProduct);

export default { router };
