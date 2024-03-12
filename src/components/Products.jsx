import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import Spinner from "./Spinner";
import { setPageItems } from "../redux/slices/PageItems";
import { setCurrentPage } from "../redux/slices/ProductSlice";

const Products = ({loading, isLoading, setIsLoading }) => {
  const dispatch = useDispatch();
  const { productItems, currentPage } = useSelector((state) => state.items);
  const { singlePageItems } = useSelector((state) => state.pageItems);
  const [activeButton, setActiveButton] = useState(null);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    const numberOne = (currentPage - 1) * itemsPerPage;
    const numberTwo = numberOne + 6;
    const products = productItems.slice(numberOne, numberTwo);
    dispatch(setPageItems(products));
    setIsLoading(false);
  }, [currentPage, dispatch, productItems, setIsLoading]);

  function handlePageChange(pageNumber) {
    dispatch(setCurrentPage(pageNumber));
    setActiveButton(pageNumber);
  }

  const postsPerPage = 6;
  const totalPages = Math.ceil(100 / postsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div>
        {isLoading || loading ? (
          <div className="flex items-center justify-center h-screen">
            {" "}
            <Spinner />
          </div>
        ) : singlePageItems.length > 0 ? (
          <div className="grid grid-cols-3 max-w-6xl p-2 mx-auto space-y-10 space-x-10 min-h-[80vh]">
            {singlePageItems.map((post) => (
              <Product key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <p>No Data Found</p>
          </div>
        )}
      </div>

      <div className="font-bold mx-auto w-fit">
        {pageNumbers.map((number) => (
          <button
            className={`m-4 ${activeButton === number ? "btn" : ""}`}
            key={number}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
};

export default Products;
