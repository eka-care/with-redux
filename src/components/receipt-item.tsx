const ReceiptItem = ({ qty, price }: { qty: number; price: number }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        {qty} x {price}
      </div>
      <div>{qty * price}</div>
    </div>
  );
};

export default ReceiptItem;
