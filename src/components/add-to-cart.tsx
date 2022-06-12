import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { selectData, modify, updateData } from "../../app/cartSlice";
import { ICartData } from "../../app/types/cartTypes";

const AddToCart = ({ dataItem }: { dataItem: ICartData }) => {
  const dispatch = useDispatch();

  const data = useSelector(selectData);

  const modifyCount = (data: ICartData) => {
    dispatch(modify(data));
  };

  // const product = data.filter((item) => item.id === productId)[0];
  const product = dataItem;
  const productId = dataItem.id;

  return (
    <div className="w-full border border-[#1d7cbf] font-bold">
      {product.count == 0 ? (
        <div
          onClick={() => {
            modifyCount({ ...dataItem, count: 1 });
          }}
          className="w-full text-center text-[#1d7cbf] py-2"
        >
          Add to Cart
        </div>
      ) : (
        <div className="w-full text-center grid grid-cols-4 ">
          <div
            onClick={() => {
              modifyCount({ ...dataItem, count: dataItem.count - 1 });
              // modifyCount(productId, product.count, -1);
            }}
            className="col-span-1 py-2 bg-[#1d7cbf] text-white flex justify-center items-center"
          >
            <div className="h-[2px] w-3 bg-white"></div>
          </div>
          <div className="col-span-2 py-2"> {product.count}</div>
          <div
            onClick={() => {
              modifyCount({ ...dataItem, count: dataItem.count + 1 });
            }}
            className="col-span-1 py-2 bg-[#1d7cbf] text-white"
          >
            +
          </div>
        </div>
      )}
    </div>
  );
};
export default AddToCart;
