import ProductItem from "./ProductItem";
import data from "../data";

import ReactPaginate from "react-paginate";
import { useState } from "react";

export default function ProductList() {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 8;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / 8);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 8) % data.length;
    setItemOffset(newOffset);
  };

  function renderProductItems() {
    return currentItems.map((item) => {
      return (
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      );
    });
  }
  return (
    <div className="">
      <ul className="flex flex-col items-center productList">
        {renderProductItems()}
      </ul>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        className="pagination"
      />
    </div>
  );
}
