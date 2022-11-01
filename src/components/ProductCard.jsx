import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../cartContext";
import { useContext } from "react";

const ProductCard = (props) => {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6" align="center">
                <Button sm="6" className="m-2" 
                onClick={() => cart.addOneToCart(product.id)}>+</Button>
                <Button sm="6" className="m-2" 
                onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
              </Col>
            </Form>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
