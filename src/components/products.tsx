import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../../app/cartSlice";
import AddToCart from "./add-to-cart";
import Card from "./product-card";
import ProductsTopSection from "./products-top-section";

const MainSection = () => {
  const data = useSelector(selectData);

  return (
    <div>
      <div className="flex justify-start md:flex-row flex-col items-center flex-wrap ">
        {data.map((item, index) => {
          return (
            <div key={"cardItem" + index}>
              <Card dataItem={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DiscountTag = ({ discount }: { discount: number }) => {
  return <div className="bg-black text-white">{discount}% OFF</div>;
};

const Products = () => {
  return (
    <div className="grid grid-cols-12 md:py-25 py-8">
      <div className="md:col-span-10 md:col-start-2 justify-center col-span-full px-4 md:px-0">
        <ProductsTopSection />
        <MainSection />
      </div>
    </div>
  );
};

export default Products;
