"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Col, Container, Row } from "react-bootstrap";

// Import Components
import Breadcrumbs from "@/components/Breadcrumb";
import BillCard from "@/components/cart/BillCard";
import BooksCartView from "@/components/cart/BooksCartView";
import TotalCard from "@/components/cart/TotalCard";
import useCart from "@/hooks/useCart";

// Import Lottie Animation
import empty from "@/assets/LottieFiles/empty.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const CartPage = () => {
  const { CartInfo, SubTotal } = useCart();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hasItems = !!CartInfo.length;

  return (
    <Container style={{ maxWidth: "1575px" }} className="cart">
      <div className="reverse-Direction">
        <Breadcrumbs />
      </div>

      {hasItems ? (
        <>
          <Row className="cart-headers mt-5">
            {["صورة الكتاب", "الاسم", "الكمية", "السعر", "التصنيف", "حذف"].map(
              (title, index) => (
                <Col
                  key={index}
                  xs={2}
                  className={`cart-title ${
                    index === 4 ? "d-none-inmobile" : ""
                  }`}
                >
                  {title}
                </Col>
              )
            )}
          </Row>

          <BooksCartView CartInfo={CartInfo} />

          <Link href="/Shop" className="back-shop border p-2">
            العودة للمتجر
          </Link>

          <Row className="cart-bill">
            <Col lg={6} md={12}>
              <BillCard CartInfo={CartInfo} />
            </Col>
            <Col lg={6} md={12}>
              <div className="head checkout-btn">إجمالي المشتريات</div>
              <TotalCard SubTotal={SubTotal} />
              <Link
                href="/Cart/Checkout"
                className="checkout-btn g-btn btn mt-5"
              >
                Proceed to Checkout
              </Link>
            </Col>
          </Row>
        </>
      ) : (
        <div className="empty-cart">
          <Lottie animationData={empty} />
          <p>السلة فارغة</p>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
