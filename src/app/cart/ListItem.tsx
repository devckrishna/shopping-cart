import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { Notify } from "notiflix/build/notiflix-notify-aio";

type ListItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice: number;
};

export default function ListItem({
  id,
  title,
  price,
  image,
  quantity,
  totalPrice,
}: ListItemProps) {
  const dispatch = useDispatch();

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
  };

  const handleRemovingFromCart = () => {
    dispatch(
      cartActions.removeItemFromCartAtOnce({
        id,
        title,
        price,
        image,
        quantity,
        totalPrice,
      })
    );
  };

  return (
    <li className="text-[16px] mt-[35px] mobile:flex mobile:justify-between">
      <div className="flex mb-[10px]">
        <div className="min-w-[100px]">
          <img
            src={image}
            alt="product photo"
            className="max-h-[100px] max-w-[100px]"
          />
        </div>
        <div className="ml-[10px]">
          <p className="mb-[5px] font-[500]">{title}</p>
          <div className="flex items-center">
            <button
              className="font-bold text-[20px]"
              onClick={() => dispatch(cartActions.removeItemFromCartByOne(id))}
            >
              -
            </button>
            <p className="mx-[10px]">{quantity}</p>
            <button
              className="font-bold text-[20px]"
              onClick={handleAddingToCart}
            >
              +
            </button>
          </div>
          <button
            className="text-[14px] text-darkGray transitionProp hover:text-red-600"
            onClick={handleRemovingFromCart}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex mobile:flex-col">
        <p className="mr-[20px] mobile:mr-[0px]">
          <span className="text-gray">Price:</span> ${price}
        </p>
        <p className="">
          <span className="text-gray">Total:</span> ${totalPrice.toFixed(2)}
        </p>
      </div>
    </li>
  );
}
