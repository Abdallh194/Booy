"use client";
import React from "react";
import BookLoop from "@/components/BookLoop/BookLoop";
import useShop from "@/hooks/useShop";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdOutlineTouchApp } from "react-icons/md";
import useCart from "@/hooks/useCart";
import { CiShoppingBasket } from "react-icons/ci";
import QuantityCounter from "./QuantityCounter";

const Page = () => {
  const {
    ProductsFullInfo,
    error,
    loading,
    RemaingHandler,
    isDisabled,
    setisDisabled,
  } = useShop();

  const { TotalQuantity, quantityStyle } = useCart();

  return (
    <div className="Shop">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} className="Text-Card">
            <div className="head">إقرا كل يوم ونمي شخصيتك وزود مهاراتك</div>
            <div className="desc">
              مكتبتي هتوفرلك اي كتاب ممكن تطلبه اذا كان من الكتب الحديثه او
              القديمه مهما كان نوعها بأرخص الاسعار ويمكنك استعاره بعض الكتب
              مجانا
            </div>
            <div className="btns d-flex align-items-center">
              <div className="start">
                إبدا الأن <FaBookOpenReader />
              </div>
              <div className="learn">
                إقراء المزيد
                <MdOutlineTouchApp />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="Image-Card">
            <Image
              src="/ReadBook.png"
              alt="ReadBook"
              width={500}
              height={500}
              className="img-fluid"
            />
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
          </Col>
        </Row>
      </Container>
      <Container style={{ maxWidth: "1575px" }}>
        <BookLoop
          Books={ProductsFullInfo}
          loading={loading}
          error={error}
          RemaingHandler={RemaingHandler}
          isDisabled={isDisabled}
          setisDisabled={setisDisabled}
        />
      </Container>
      {TotalQuantity > 0 ? (
        <QuantityCounter
          className={`icon ${quantityStyle}`}
          to="/Cart"
          length={TotalQuantity}
        >
          <CiShoppingBasket />
        </QuantityCounter>
      ) : (
        ""
      )}
    </div>
  );
};

export default Page;
