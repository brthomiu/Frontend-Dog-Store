import { Button } from "react-bootstrap"
import { useCallback } from "react";
import { useNavigate } from "react-router-dom"

const Cancel = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);

  return (
    <>
    <h1>Sorry to see you cancelled your Stripe payment!</h1>
    <Button className="mt-3" onClick={handleOnClick}>Return to Store</Button>
    </>
  )
}

export default Cancel