"use client";
import Breadcrumbs from "@/components/Breadcrumb";
import ProductBillDetails from "@/components/cart/ProductBillDetails";
import TotalCard from "@/components/cart/TotalCard";
import ConfirmModal from "@/components/checkout/ConfirmModal";
import CriditCardPayment from "@/components/checkout/CriditCardPayment";
import InputForm from "@/components/checkout/UserInforForm";
import useCart from "@/hooks/useCart";
import useCheckout from "@/hooks/useCheckout";
import {
  ConfirmAddOrder,
  GetUserData,
} from "@/Redux/features/Orders/OrderSlice";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Checkout = () => {
  const { CartInfo, SubTotal } = useCart();

  const {
    isAnimate,
    setIsAnimate,
    setconfirmCriditCard,
    confirmCriditCard,
    confirmUserInfo,
    setconfirmUserInfo,
    UserInfo,
    setUserInfo,
    dispatch,
    handleShow,
    show,
    setShow,
  } = useCheckout();

  return (
    <Container className="Checkout">
      <div className="reverse-Direction">
        <Breadcrumbs />
      </div>

      <Row className="mt-5">
        <Col lg={6} md={12}>
          <InputForm
            confirmUserInfo={confirmUserInfo}
            setconfirmUserInfo={setconfirmUserInfo}
            setUserInfo={setUserInfo}
          />
          <CriditCardPayment
            setconfirmCriditCard={setconfirmCriditCard}
            confirmCriditCard={confirmCriditCard}
            isAnimate={isAnimate}
            setIsAnimate={setIsAnimate}
          />
        </Col>
        <Col lg={6} md={12}>
          <ProductBillDetails CartInfo={CartInfo} />
          <hr />
          <TotalCard SubTotal={SubTotal} />
          {confirmCriditCard && confirmUserInfo ? (
            <div
              className="confirm-orders"
              onClick={() => {
                handleShow();
                dispatch(ConfirmAddOrder(CartInfo));
                dispatch(GetUserData(UserInfo));
              }}
            >
              تاكيد ودفع
            </div>
          ) : null}
        </Col>
        <ConfirmModal show={show} setShow={setShow} />
      </Row>
    </Container>
  );
};

export default Checkout;
