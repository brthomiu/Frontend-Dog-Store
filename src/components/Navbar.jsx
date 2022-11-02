import { Button, Navbar, Modal } from "react-bootstrap";
import { useState, useContext, useCallback } from "react";
import { CartContext } from "../cartContext";
import CartProduct from "./CartProduct";

const NavbarComponent = () => {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  ////////// This is the checkout function that sends the cart to Stripe when the backend is running
  // const checkout = async () => {
  //   await fetch("http://localhost:4000/checkout", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ items: cart.items }),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((response) => {
  //       if (response.url) {
  //         window.location.assign(response.url);
  //       }
  //     });
  // };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand hred="/">Dogs4Sale.com</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Shopping Cart</Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartProduct>
              ))}
              <h1 className="p-2">Total: ${cart.getTotalCost().toFixed(2)}</h1>
              <Button className="m-2" variant="success">
                <a
                  style={{ color: "#fff", textDecoration: "none" }}
                  href="/success"
                >
                  <h3>Check Out</h3>
                </a>
              </Button>
            </>
          ) : (
            <>
              <p className="p-2">Your cart is empty.</p>
              <h1 className="m-2">Total: ${cart.getTotalCost().toFixed(2)}</h1>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarComponent;
