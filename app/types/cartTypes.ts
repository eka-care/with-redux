export type ICartData = {
  id: number;
  name: string;
  description: string;
  original_price?: number;
  final_price: number;
  img_url: string;
  count: number;
};

// declaring the types for our state
export type ICartState = {
  data: ICartData[];
};
