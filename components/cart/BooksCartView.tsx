import { DeleteItemFromCard } from "@/Redux/features/Cart/CartSlice";
import { useAppDispatch } from "@/Redux/hooks";
import Image from "next/image";
import React, { memo } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { FaRegTrashCan } from "react-icons/fa6";

const BooksCartView = ({ CartInfo }: ICartProps) => {
  const dispatch = useAppDispatch();

  const cartCol = (content: React.ReactNode, extraClasses = "", xs = 2) => (
    <Col className={`cart-title ${extraClasses}`} xs={xs}>
      {content}
    </Col>
  );

  return (
    <>
      {CartInfo.map((book, idx) => (
        <Row key={idx} className="cart-headers">
          {cartCol(
            <Image
              src={book.img}
              alt={book.title}
              className="img-fluid"
              width={50}
              height={100}
            />,
            "",
            2
          )}

          {cartCol(book.title)}

          {cartCol(book.Qunatity)}

          {cartCol(`${book.price} ج.م`)}

          {cartCol(book.cat, "d-none-inmobile")}

          {cartCol(
            <Button
              variant="danger"
              className="dlt"
              onClick={() => dispatch(DeleteItemFromCard(book.id))}
            >
              <FaRegTrashCan />
            </Button>,
            "",
            2
          )}
        </Row>
      ))}
    </>
  );
};

export default memo(BooksCartView);
