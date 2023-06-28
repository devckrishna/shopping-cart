import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { Notify } from "notiflix/build/notiflix-notify-aio";

type TableItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice: number;
};

export default function TableItem({
  id,
  title,
  price,
  image,
  quantity,
  totalPrice,
}: TableItemProps) {
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
    <tbody className="">
      <tr className="text-[16px] spaceUnder">
        <td>
          <div className="flex">
            <div>
              <img
                src={image}
                alt="product photo"
                className="max-h-[100px] max-w-[100px]"
              />
            </div>
            <div className="ml-[15px]">
              <p className="mb-[5px] font-[500]">{title}</p>
              <button
                className="text-[14px] text-darkGray transitionProp hover:text-red-600"
                onClick={handleRemovingFromCart}
              >
                Remove
              </button>
            </div>
          </div>
        </td>
        <td className="flex justify-center items-center">
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
        </td>
        <td>
          <p className="td">Rs. {price}</p>
        </td>
        <td>
          <p className="td">Rs. {totalPrice.toFixed(2)}</p>
        </td>
      </tr>
    </tbody>
  );
}
