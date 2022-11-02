import dog1 from "./assets/dog1.png"
import dog2 from "./assets/dog2.png"
import dog3 from "./assets/dog3.png"



export const productsArray = [
  {
    id: "price_1LzTBxLDMQ89ZmzgUepRvkao",
    title: "Bad Dog",
    price: "100.00",
    image: dog1,
  },
  {
    id: "price_1LzTCsLDMQ89ZmzgYNg2Vo0a",
    title: "Standard Dog",
    price: "200.00",
    image: dog2,
  },
  {
    id: "price_1LzTDhLDMQ89Zmzg33aodF5V",
    title: "Good Dog",
    price: "300.00",
    image: dog3,
  },
];

export const getProductData = (id) => {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
  }

  return productData;
};
