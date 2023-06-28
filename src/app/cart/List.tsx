import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "../store/cartSlice";

export default function List() {
  const cart = useSelector(selectCartItems);

  function renderList() {
    return cart.map((item) => {
      return (
        <ListItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          totalPrice={item.totalPrice}
          quantity={item.quantity}
        />
      );
    });
  }

  return (

      <ul className="laptop:hidden">{renderList()}</ul>
  );
}
