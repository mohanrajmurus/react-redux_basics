import { useState } from "react";
import { useDispatch } from "react-redux";

const OrderForm = () => {
  const [state, setState] = useState({ order: "", amount: 1 });

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addOrder = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ORDER",
      payload: state
    });
    setState({
      order: "",
      amount: 1
    });
  };

  return (
    <div>
      <form onSubmit={addOrder}>
        <input
          type={"text"}
          placeholder="order"
          value={state.order}
          name="order"
          onChange={handleChange}
        />
        <input
          type={"number"}
          placeholder="amount"
          name="amount"
          onChange={handleChange}
          value={state.amount}
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default OrderForm;
