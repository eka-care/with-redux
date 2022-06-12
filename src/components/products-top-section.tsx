import Separator from "./separator";
import Image from "next/image";

const ProductsTopSection = () => {
  return (
    <div className="flex flex-col text-center">
      <div className="font-bold  text-xl">Most Popular</div>
      <div className="flex items-center justify-center pt-3 md:pt-5">
        <Separator className="bg-black w-1/5" />
        <div className="relative w-7 h-7 p-1 rounded-full flex items-center justify-center bg-slate-100 mx-2">
          <Image
            src={"/star-regular.svg"}
            alt="star.svg"
            width={40}
            height={40}
          />
        </div>
        <Separator className="bg-black w-1/5" />
      </div>
    </div>
  );
};

export default ProductsTopSection;
