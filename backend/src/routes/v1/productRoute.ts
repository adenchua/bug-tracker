import express from "express";

import productController from "../../controllers/v1/productController";
import reportController from "../../controllers/v1/reportController";
import productValidators from "../../utils/productValidators";

const router = express.Router();

router.get("/:id/reports", reportController.getReportsByProductId);
router.post("/", productValidators.createProductValidators, productController.createProduct);
router.patch("/:id", productValidators.updateProductValidators, productController.updateProduct);

export default { router };
