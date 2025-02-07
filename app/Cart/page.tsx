"use client";
import Breadcrumbs from "@/components/Breadcrumb";
import BillCard from "@/components/cart/BillCard";
import BooksCartView from "@/components/cart/BooksCartView";
import TotalCard from "@/components/cart/TotalCard";
import useCart from "@/hooks/useCart";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import empty from "@/assets/LottieFiles/empty.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const Page = () => {
  const { CartInfo, SubTotal } = useCart();

  return (
    <Container style={{ maxWidth: "1575px" }} className="cart">
      <div className="reverse-Direction">
        <Breadcrumbs />
      </div>

      {CartInfo.length > 0 ? (
        <>
          {" "}
          <Row className="cart-headers mt-5">
            <Col xs={2} className="cart-title">
              صورة الكتاب
            </Col>
            <Col xs={2} className="cart-title">
              الاسم
            </Col>
            <Col xs={2} className="cart-title">
              الكمية
            </Col>
            <Col xs={2} className="cart-title">
              السعر
            </Col>
            <Col xs={2} className="d-none-inmobile">
              التصنيف
            </Col>
            <Col xs={2} className="cart-title">
              حذف
            </Col>
          </Row>
          <BooksCartView CartInfo={CartInfo} />
          <Link href="/Shop" className="back-shop border p-2">
            العوده للمتجر
          </Link>
          <Row className="cart-bill">
            <Col lg={6} md={12}>
              <BillCard CartInfo={CartInfo} />
            </Col>
            <Col lg={6} md={12}>
              <div className="head checkout-btn">إجمالي المشتريات </div>

              <TotalCard SubTotal={SubTotal} />
              <Link
                href="Cart/Checkout"
                className="checkout-btn g-btn btn mt-5"
              >
                Procees to checkout
              </Link>
            </Col>
          </Row>
        </>
      ) : (
        <div className="empty-cart">
          <Lottie animationData={empty} />
          <p> السلة فارغة</p>
        </div>
      )}
    </Container>
  );
};

export default Page;
