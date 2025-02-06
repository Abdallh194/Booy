import Image from "next/image";
import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { FaRegTrashCan } from "react-icons/fa6";

const BooksCartView = ({ CartInfo }: ICartProps) => {
  console.log(CartInfo);

  return (
    <>
      {CartInfo.map((b, idx) => (
        <div key={idx}>
          <Row className="cart-headers">
            <Col xs={2} className="cart-title">
              <Image
                src={b.img}
                alt={b.title}
                className="img-fluid"
                width={50}
                height={100}
              />
            </Col>
            <Col className="cart-title" xs={2}>
              {b.title}
            </Col>
            <Col className="cart-title" xs={2}>
              {b.Qunatity}
            </Col>
            <Col className="cart-title" xs={2}>
              {b.price}
            </Col>
            <Col xs={2} className="d-none-inmobile">
              {b.cat}
            </Col>
            <Col className="cart-title dlt" xs={2}>
              <FaRegTrashCan />
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
};

export default memo(BooksCartView);
