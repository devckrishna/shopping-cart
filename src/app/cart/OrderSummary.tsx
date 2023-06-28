import TitleWrap from "./TitleWrap";
import { useSelector } from "react-redux";
import { selectTotalQuantity, selectTotalPrice } from "../store/cartSlice";

export default function OrderSummary() {
  const finalPrice = useSelector(selectTotalPrice);

  return (
    <section className="laptop:w-[30%] bg-lightGray px-[20px] py-[30px] tablet:pt-[70px] text-[16px] font-[500]">
      <div className="mobile:max-w-[480px] mx-auto laptop:w-[100%]">
        <TitleWrap>
          <h2 className="largeBoldText py-[3px]">Order Summary</h2>
        </TitleWrap>
        
        <div className="flex justify-between mt-[30px]">
          <p className="">TOTAL COST</p>
          <p>Rs. {finalPrice.toFixed(2)}</p>
        </div>
        <button className="outline-none p-[10px] text-white bg-violet transitionProp hover:bg-darkViolet w-[100%] mt-[30px]">
          CHECKOUT
        </button>
      </div>
    </section>
  );
}
