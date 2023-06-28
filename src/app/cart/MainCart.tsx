import TitleWrap from "./TitleWrap";
import Table from "./Table";
import List from "./List";
import { useSelector } from "react-redux";
import { selectTotalQuantity } from "../store/cartSlice";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

export default function MainCart() {
  const total = useSelector(selectTotalQuantity);

  return (
    <section className="laptop:w-[70%] laptop:h-[100vh] pr-[20px] laptop:pr-[70px] pt-[30px] tablet:pt-[70px] pl-[20px]">
      <TitleWrap>
        <h2 className="title">Shopping Cart</h2>
        {total === 1 ? (
          <p className="largeBoldText">{total} Item</p>
        ) : (
          <p className="largeBoldText">{total} Items</p>
        )}
      </TitleWrap>
      {total === 0 ? (
        <p className="mt-[30px]">You shopping cart is empty</p>
      ) : (
        <div>
          <Table />
          <List />
        </div>
      )}

      <Link
        className="flex items-center laptop:absolute laptop:bottom-[70px] text-[16px] font-[500] text-violet transitionProp hover:text-darkViolet my-[20px] laptop:my-[0px]"
        to="/"
      >
        <Icon
          icon="ic:outline-arrow-right-alt"
          rotate={2}
          className="text-[24px]"
        />
        <p>Continue Shopping</p>
      </Link>
    </section>
  );
}
