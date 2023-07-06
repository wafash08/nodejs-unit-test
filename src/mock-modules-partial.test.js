import { getAllProducts } from "../src/database.js";
import { ProductServices } from "../src/product-service.js";

jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js");

  return {
    __esModule: true,
    ...originalModule,
    getAllProducts: jest.fn(),
  };
});

test.failing("mock modules getProductById", () => {
  ProductServices.findById(1);
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
