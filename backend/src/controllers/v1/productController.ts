import { Request, Response } from "express";
import { validationResult } from "express-validator";

import productService from "../../services/productService";

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

export default { createProduct };
