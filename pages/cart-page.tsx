import Link from "next/link";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { selectData } from "../app/cartSlice";
import OrderItem from "../src/components/order-item";
import ReceiptItem from "../src/components/receipt-item";
import Separator from "../src/components/separator";
import TopNav from "../src/components/top-nav";

const MainContent = () => {
  const data = useSelector(selectData);
  const itemsInCart = data.filter((item) => item.count > 0);

  const purchaseDetail = { totalPrice: 0, totalDiscount: 0, totalItems: 0 };
  for (let i = 0; i < itemsInCart.length; i++) {
    const item = itemsInCart[i];
    purchaseDetail.totalItems += item.count;
    purchaseDetail.totalPrice += item.count * item.final_price;
    if (!!item.original_price) {
      purchaseDetail.totalDiscount +=
        (item.original_price - item.final_price) * item.count;
    }
  }

  return (
    <div className="grid md:grid-cols-12 px-4">
      <div className="md:col-start-2 md:col-span-10 pt-10">
        <div className="col-span-full ">
          <Link href={"/homepage"}>
            <span className="cursor-pointer">Back to home</span>
          </Link>
        </div>
        {!!purchaseDetail.totalItems ? (
          <div className="col-span-full">
            <div className="pt-5">
              <div className="flex">
                <div>Order Summary : </div>
                {purchaseDetail.totalItems && (
                  <div className="pl-3">
                    {" "}
                    ( {purchaseDetail.totalItems} items )
                  </div>
                )}
              </div>
              <div className="grid md:grid-cols-11 pt-5">
                {/* Order List */}
                <div className="md:col-span-6 border border-slate-300 p-4 md:mr-4">
                  <div className="grid grid-cols-4 p-3">
                    <div className="">S.NO.</div>
                    <div className="">ITEMS</div>
                    <div className="col-span-2 text-center">QTY</div>
                  </div>

                  <Separator className="bg-slate-300" />
                  <div className="p-3">
                    {itemsInCart.map((item, idx) => {
                      return <OrderItem key={item.id} idx={idx} item={item} />;
                    })}
                  </div>
                  <Separator className="bg-slate-300 mb-3" />

                  <Link href={"/homepage"}>
                    <span className="mt-3 cursor-pointer p-3 text-[#1d7cbf]">
                      + Add more items
                    </span>
                  </Link>
                </div>
                {/* Receipt Box*/}
                <div className="md:col-span-5 borer bg-slate-100 border-slate-300 md:ml-3 mt-5 md:mt-0 p-4">
                  <div className="pl-4">Price Details</div>
                  <Separator className="bg-slate-300 my-3" />
                  <div className="flex flex-col">
                    {itemsInCart.map((item, idx) => {
                      return (
                        <ReceiptItem
                          qty={item.count}
                          key={item.id}
                          price={item.final_price}
                        />
                      );
                    })}
                  </div>
                  <Separator className="bg-slate-300 my-3" />
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <div>Total Savings</div>
                      <div className="text-lime-600">
                        $ {purchaseDetail.totalDiscount.toString()}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div>Delivery Fee</div>
                      <div>$ 5.00</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Taxes and Charges</div>
                      <div>$ 2.00</div>
                    </div>
                  </div>
                  <Separator className="bg-slate-300 my-3" />
                  <div className="flex justify-between">
                    <div>To Pay</div>
                    <div>$ {purchaseDetail.totalPrice}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>No items in the cart</div>
        )}
      </div>
    </div>
  );
};

const CartPage = () => {
  return (
    <div>
      <TopNav />
      <MainContent />
    </div>
  );
};

export default CartPage;
