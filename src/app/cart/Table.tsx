import TableItem from "./TableItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "../store/cartSlice";

export default function Table() {
  const cart = useSelector(selectCartItems);

  function renderTableRows() {
    return cart.map((item) => {
      return (
        <TableItem
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
    <table className="w-[100%] mt-[30px] hidden laptop:block">
      <colgroup>
        <col span={1} style={{ width: "40%" }} />
        <col span={1} style={{ width: "20%" }} />
        <col span={1} style={{ width: "20%" }} />
        <col span={1} style={{ width: "20%" }} />
      </colgroup>
      <thead className="">
        <tr className="text-darkGray text-[12px]">
          <th className="font-[400] text-start">PRODUCT DETAILS</th>
          <th className="font-[400]">QUANTITY</th>
          <th className="font-[400]">PRICE</th>
          <th className="font-[400]">TOTAL</th>
        </tr>
      </thead>
      {renderTableRows()}
    </table>
  );
}
