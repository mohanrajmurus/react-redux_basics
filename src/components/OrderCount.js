import { useSelector } from "react-redux";

const OrderCount = () => {
  const orders = useSelector((state) => state.orders);
  return (
    <div>
      <h3>Number of orders: {orders.length}</h3>
    </div>
  );
};

export default OrderCount;
