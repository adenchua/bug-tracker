export interface Product {
  id: string;
  name: string;
  isDeleted: false;
}

export type NewProduct = Omit<Product, "id" | "isDeleted">;
