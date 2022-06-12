import { ICartData } from "../../app/types/cartTypes";
import AddToCart from "./add-to-cart";

const OrderItem = ({ idx, item }: { idx: number; item: ICartData }) => {
  return (
    <div className={` grid grid-cols-4 p-3 items-center`}>
      <div className="">{idx + 1}</div>
      <div className="">{item.name}</div>
      <div className="col-span-2 pl-4">
        <AddToCart dataItem={item} />
      </div>
    </div>
  );
};

export default OrderItem;
