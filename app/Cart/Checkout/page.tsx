"use client";
import Breadcrumbs from "@/components/Breadcrumb";
import ProductBillDetails from "@/components/cart/ProductBillDetails";
import TotalCard from "@/components/cart/TotalCard";
import ConfirmModal from "@/components/checkout/ConfirmModal";
import CriditCardPayment from "@/components/checkout/CriditCardPayment";
import InputForm from "@/components/checkout/UserInforForm";
import useCart from "@/hooks/useCart";
import useCheckout from "@/hooks/useCheckout";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
import empty from "@/assets/LottieFiles/empty.json";
import Link from "next/link";
import { UpdateOrderAndUser } from "@/Redux/features/Orders/OrderSlice";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
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
    orderId,
  } = useCheckout();

  return (
    <Container className="Checkout">
      <div className="reverse-Direction">
        <Breadcrumbs />
      </div>

      {CartInfo.length > 0 ? (
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
                  dispatch(
                    UpdateOrderAndUser({
                      orderId: orderId, // رقم الطلب
                      UserData: {
                        UserInfo,
                      },
                      OrderData: { CartInfo, UserInfo }, // بيانات الطلب الجديدة
                    })
                  );
                }}
              >
                تاكيد ودفع
              </div>
            ) : null}
          </Col>
          <ConfirmModal show={show} setShow={setShow} orderId={orderId} />
        </Row>
      ) : (
        <div className="empty-cart">
          <Lottie animationData={empty} />
          <p>
            لا توجد طلبات للدفع <Link href="/Shop">إطلب الان</Link>
          </p>
        </div>
      )}
    </Container>
  );
};

export default Checkout;
