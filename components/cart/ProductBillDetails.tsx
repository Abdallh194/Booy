import { memo } from "react";
import React from "react";
const ProductBillDetails = ({ CartInfo }: ICartProps) => {
  return (
    <>
      <div className="d-flex mt-4 justify-content-between">
        <div className="bill-head">إسم الكتاب </div>
        <div className="bill-head">سعر الكتاب الواحد </div>
      </div>
      <hr />
      {CartInfo.map((e, idx) => (
        <div className="d-flex mt-2 justify-content-between" key={idx}>
          <div className="bill-head">
            {e.title} * {e.Qunatity}
          </div>
          <div className="bill-head">{e.price} جنيه </div>
        </div>
      ))}
    </>
  );
};

export default memo(ProductBillDetails);
