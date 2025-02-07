import React, { memo } from "react";

declare interface ITotal {
  SubTotal: () => number;
}
const TotalCard = ({ SubTotal }: ITotal) => {
  return (
    <div className="total-card">
      <div className="d-flex mt-4 justify-content-between">
        <div className="bill-head">الخصم</div>
        <div className="bill-head">0 جنيه </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <div className="bill-head">الشحن</div>
        <div className="bill-head">مجانا</div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <div className="bill-head">الإجمالي</div>
        <div className="bill-head">{SubTotal()} جنيه </div>
      </div>
    </div>
  );
};

export default memo(TotalCard);
