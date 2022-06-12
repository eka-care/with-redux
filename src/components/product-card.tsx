import AddToCart from "./add-to-cart";
import Image from "next/image";
import { ICartData } from "../../app/types/cartTypes";

const Card = ({ dataItem }: { dataItem: ICartData }) => {
  const {
    name,
    description,
    final_price: finalPrice,
    original_price: originalPrice,
    img_url: img,
  } = dataItem;

  let productName: string | string[] = name.split(" ");
  for (let i = 0; i < productName.length; i++) {
    productName[i] =
      productName[i].charAt(0).toUpperCase() + productName[i].slice(1);
  }
  productName = productName.join(" ");

  return (
    <div className=" flex flex-col w-[328px] rounded-lg p-[8px]">
      <div className="w-auto h-auto flex justify-center items-center relative">
        <Image src={img} alt="" width={604} height={378} />
      </div>
      <div className="px-2 mt-2">
        <div className="flex justify-between ">
          <div>{productName}</div>
          <div className="flex space-x-4">
            {originalPrice && (
              <div className="line-through">$ {originalPrice}</div>
            )}
            <div>$ {finalPrice}</div>
          </div>
        </div>
        <div className="">{description}</div>
        <AddToCart dataItem={dataItem} />
      </div>
    </div>
  );
};

export default Card;
