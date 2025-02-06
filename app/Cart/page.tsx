"use client";
import Breadcrumbs from "@/components/Breadcrumb";
import BillCard from "@/components/cart/BillCard";
import BooksCartView from "@/components/cart/BooksCartView";
import TotalCard from "@/components/cart/TotalCard";
import useCart from "@/hooks/useCart";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Page = () => {
  const { CartInfo, SubTotal } = useCart();

  return (
    <Container style={{ maxWidth: "1575px" }} className="cart">
      <div className="reverse-Direction">
        <Breadcrumbs />
      </div>
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
          <TotalCard SubTotal={SubTotal} />
        </Col>
      </Row>
    </Container>
  );
};

export default Page;
