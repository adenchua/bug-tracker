import { NewProduct, Product } from "../interfaces/Product";

const createProduct = (newProduct: NewProduct): Product => {
  return { id: "qwdom231", isDeleted: false, ...newProduct };
};

export default { createProduct };
