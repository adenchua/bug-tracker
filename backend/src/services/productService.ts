import { NewProduct, Product } from "../interfaces/Product";

const createProduct = (newProduct: NewProduct): Product => {
  return { id: "qwdom231", isDeleted: false, ...newProduct };
};

const updateProduct = (productId: string, updatedProductFields: Partial<Product>): void => {};

export default { createProduct, updateProduct };
