import { getAllProducts, getProductById } from "./database";

export class ProductServices {
  static findById(id) {
    return getProductById(id);
  }

  static findAll() {
    return getAllProducts();
  }
}
