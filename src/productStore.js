export const productsArray = [
  {
    id: "price_1LzTBxLDMQ89ZmzgUepRvkao",
    title: "Buy me Coffee",
    price: "5.00",
  },
  {
    id: "price_1LzTCsLDMQ89ZmzgYNg2Vo0a",
    title: "Buy me Lunch",
    price: "10.00",
  },
  {
    id: "price_1LzTDhLDMQ89Zmzg33aodF5V",
    title: "Give me $100",
    price: "100.00",
  },
];

export const getProductData = (id) => {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
  }

  return productData;
};
