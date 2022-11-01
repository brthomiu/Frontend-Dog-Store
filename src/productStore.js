export const productsArray = [
  {
    id: "1",
    title: "Item1",
    price: "3.50",
  },
  {
    id: "2",
    title: "Item2",
    price: "3.50",
  },
  {
    id: "3",
    title: "Item3",
    price: "3.50",
  },
  {
    id: "4",
    title: "Item4",
    price: "3.50",
  },
  {
    id: "5",
    title: "Item5",
    price: "3.50",
  },
  {
    id: "6",
    title: "Item6",
    price: "3.50",
  },
];

export const getProductData = (id) => {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
  }

  return productData;
};
