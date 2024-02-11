import { Request, Response } from "express";
import { validationResult } from "express-validator";

import productService from "../../services/productService";
import { Product } from "../../interfaces/Product";

type UpdateProductBody = Pick<Product, "name" | "isDeleted">;

const createProduct = (req: Request, res: Response): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send({ errors: errors.array() });
    return;
  }

  const { name } = <{ name: string }>req.body;

  const newProduct = productService.createProduct({ name });

  res.status(201).json({ data: newProduct });
};

const updateProduct = (req: Request, res: Response): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send({ errors: errors.array() });
    return;
  }
  const { id } = req.params;
  const { product } = <{ product: UpdateProductBody }>req.body;
  const { isDeleted, name } = product;

  productService.updateProduct(id, { name, isDeleted });

  res.sendStatus(204);
};

export default { createProduct, updateProduct };
