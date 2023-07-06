import { getAllProducts, getProductById } from "./database";
import { ProductServices } from "./product-service";

jest.mock("../src/database.js");

test("mock modules getProductById", () => {
  getProductById.mockImplementation(id => {
    return {
      id: id,
      name: "Product Mock",
    };
  });

  const product = ProductServices.findById(1);

  expect(product).toEqual({
    id: 1,
    name: "Product Mock",
  });
});

test("mock modules getAllProducts", () => {
  const products = [
    {
      id: 1,
      name: "Product Mock",
    },
    {
      id: 2,
      name: "Product Mock",
    },
  ];

  getAllProducts.mockImplementation(() => {
    return products;
  });

  expect(ProductServices.findAll()).toEqual(products);
});
