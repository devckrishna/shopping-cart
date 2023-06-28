import MainCart from "./MainCart";
import OrderSummary from "./OrderSummary";

export default function Cart() {

  return (
    <main className="flex flex-col laptop:flex-row">
      <MainCart />
      <OrderSummary />
    </main>
  );
}
