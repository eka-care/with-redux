import { ICartData } from "../app/types/cartTypes";

const CART = "CART";

export const getCartDataFromLS = function (): ICartData[] | null {
  if (typeof window !== "undefined") {
    const cartLS = window.localStorage.getItem(CART);

    if (!cartLS) return null;

    return JSON.parse(cartLS);
  }
  return null;
};

export const setCartDataIntoLS = function (data: ICartData[]) {
  window.localStorage.setItem(CART, JSON.stringify(data));
};
