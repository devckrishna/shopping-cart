import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";
import { selectCartItems, selectTotalQuantity } from "../store/cartSlice";
import { Icon } from "@iconify/react";

export default function MainPage() {
  const cart = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <main className="pt-[30px] tablet:pt-[70px] pb-[30px] px-[20px]">
      <div className="flex items-end mb-[20px] tablet:mb-[50px]">
        <h1 className="title mr-[40px]">Bakery</h1>
        <h2 className="text-gray text-[14px] font-semibold pb-[8px]">SHOP</h2>
      </div>
      <ProductList />
      { (
        <Link
          to="/cart"
          className="fixed flex justify-center items-center bg-lightGray w-[72px] h-[72px] rounded-full text-[30px] right-[5%] tablet:right-[15%] top-[20px] tablet:top-[90%] transitionProp"
        >
          <p className="absolute top-[0] right-[0] w-[36px] h-[36px] rounded-full bg-matteBlack text-white flex justify-center items-center text-[20px]">
            {totalQuantity}
          </p>
          <Icon className="text-orange  w-[36px] h-[36px]" icon="mdi:cart" />
        </Link>
      )}
    </main>
  );
}
