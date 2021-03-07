import * as React from "react";
import { useRouter } from "next/router";

function OrderConfirmation() {
  const router = useRouter();
  return <div>Your order id is {`${router.query.id}`}</div>;
}

OrderConfirmation.getInitialProps = async ({ query }) => {
  const result = await fetch(`http://localhost:3000/api/order/${query.id}`);
  if (result.status === 200) return { order: await result.json() };

  return { order: undefined };
};

export default OrderConfirmation;
