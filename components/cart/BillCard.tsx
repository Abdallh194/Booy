import React, { memo } from "react";
import { FormControl } from "react-bootstrap";
import ProductBillDetails from "./ProductBillDetails";

const BillCard = ({ CartInfo }: ICartProps) => {
  return (
    <div>
      <div className="form d-flex">
        <FormControl placeholder="Coupon Code" />
        <div className="btn g-btn">Apply Coupon</div>
      </div>
      <ProductBillDetails CartInfo={CartInfo} />
    </div>
  );
};

export default memo(BillCard);
