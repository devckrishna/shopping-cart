import { useDispatch, useSelector } from "react-redux";
import { cartActions, selectCartItems } from "../store/cartSlice";
import { Icon } from "@iconify/react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

type ProductItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductItem({
  id,
  title,
  price,
  image,
}: ProductItemProps) {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);

  const handleAddingToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        title: title,
        price: price,
        image: image,
        quantity: 0,
        totalPrice: 0,
      })
    );
    Notify.success('Product added to your cart');
  };

  const itemInCart = cart.find((i) => i.id === id);

  return (
    <li className="w-[200px] flex flex-col items-center mb-[15px] productItemTablet hover:scale-110 transition-all">
      <div className="">
        <img src={image} alt="product photo" className="max-h-[200px] max-w-[200px]"/>
      </div>
      <div className="flex justify-between w-[100%] mt-[40px]">
        <div>
          <h3 className="font-[500] leading-[18px] mb-[5px]">{title}</h3>
          <p className="text-darkGray">
            Rs. {price}</p>
        </div>
        {itemInCart ? (
          <Icon
            icon="mdi:cart-heart"
            onClick={handleAddingToCart}
            className="min-h-[30px] min-w-[30px] text-green cursor-pointer"
          />
        ) : (
          <Icon
            icon="ic:outline-shopping-cart"
            onClick={handleAddingToCart}
            className="min-h-[30px] min-w-[30px] text-orange cursor-pointer"
          />
        )}
      </div>
    </li>
  );
}
