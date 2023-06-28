import { Routes, Route } from "react-router-dom";

import MainPage from "./app/mainPage/MainPage";
import Cart from "./app/cart/Cart";

function App() {
  return (
    <div className="max-w-[1100px] mx-auto text-matteBlack">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
