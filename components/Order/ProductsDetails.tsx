import Image from "next/image";
import { memo } from "react";

const ProductsDetails: React.FC<ICartProps> = ({ CartInfo }) => {
  return (
    <>
      {CartInfo.map((product, idx) => (
        <div
          className="d-flex justify-content-between align-items-center bill-card"
          key={idx}
        >
          <div className="d-flex align-items-center mb-2">
            <Image
              src={product.img}
              alt={product.title}
              className="img-fluid"
              width={40}
              height={40}
            />
            <div className="bill-head" style={{ marginRight: "10px" }}>
              {product.title} {product.Qunatity}x
            </div>
          </div>
          <div className="bill-head">{product.price} جنيه</div>
        </div>
      ))}
    </>
  );
};

export default memo(ProductsDetails);
