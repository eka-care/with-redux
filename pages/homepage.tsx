import { NextPage } from "next/types";
import { useSelector } from "react-redux";
import Products from "../src/components/products";
import TopNav from "../src/components/top-nav";

import { selectData } from "../app/cartSlice";

const Homepage: NextPage = () => {
  const data = useSelector(selectData);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="text-slate-700">
      <TopNav />
      <Products />
    </div>
  );
};

export default Homepage;
