import { useDispatch, useSelector } from "react-redux";

const OrderList = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  return (
    <div>
      {orders.map((order, index) => {
        return (
          <div key={index}>
            <span>{order.order}:</span>
            <span>{order.amount}</span>
            <button
              onClick={() => {
                dispatch({
                  type: "DELETE_ORDER",
                  payload: order.id
                });
              }}
            >
              Del
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default OrderList;
