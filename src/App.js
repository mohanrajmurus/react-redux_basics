import "./styles.css";
import OrderForm from "./components/OrderForm";
import OrderCount from "./components/OrderCount";
import OrderList from "./components/OrderList";
import { Provider } from "react-redux";
import store from "./Store/Store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <OrderForm />
        <OrderCount />
        <OrderList />
      </div>
    </Provider>
  );
}
