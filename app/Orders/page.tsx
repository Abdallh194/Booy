"use client";
import React from "react";
import { Button } from "@mui/material";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import dynamic from "next/dynamic";

// Components & Hooks
import Breadcrumbs from "@/components/Breadcrumb";
import useOrder from "@/hooks/useOrder";
import ProductBillDetails from "@/components/cart/ProductBillDetails";
import ProductsDetails from "@/components/Order/ProductsDetails";

// Animations
import empty from "@/assets/LottieFiles/empty.json";
import loadingAnimation from "@/assets/LottieFiles/loadingAnimation.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const OrderPage = () => {
  const { handleSearch, inputRef, searchedOrder, SubTotal, loading } =
    useOrder();

  // حساب إجمالي الفاتورة مسبقًا
  const totalAmount = searchedOrder ? SubTotal() : 0;

  return (
    <Container className="order">
      <div className="reverse-Direction">
        <Breadcrumbs />
      </div>

      <h3 className="head mt-5">إبحث عن طلبك بواسطة رقم الاوردر</h3>

      <Form className="d-flex mt-3" onSubmit={handleSearch}>
        <FormControl
          ref={inputRef}
          type="number"
          placeholder="برجاء إدخال رقم الاوردر"
        />
        <Button type="submit" className="searchbtn">
          بحث
        </Button>
      </Form>

      <hr />

      <div className="search-result">
        {loading ? (
          <div className="empty-cart loading-book">
            <Lottie animationData={loadingAnimation} />
          </div>
        ) : searchedOrder && searchedOrder.CartInfo.length > 0 ? (
          <Row>
            <Col md={12} lg={4} className="border-left order-card">
              <ProductBillDetails CartInfo={searchedOrder.CartInfo} />
              <hr />
              <div className="d-flex justify-content-between">
                <div className="bill-head">الإجمالي</div>
                <div className="bill-head">{totalAmount} جنيه </div>
              </div>
            </Col>

            <Col md={12} lg={4} className="border-left order-card">
              <ProductsDetails CartInfo={searchedOrder.CartInfo} />
            </Col>

            <Col md={12} lg={4} className="order-card">
              <div className="card-head">معلومات التوصيل</div>
              {(
                Object.entries(searchedOrder.UserInfo.formData) as [
                  keyof typeof searchedOrder.UserInfo.formData,
                  string | number
                ][]
              ).map(([field, value], index) => (
                <div key={index} className="bill-head m-2">
                  {field === "name" && <IoMdPerson />}
                  {field === "address" && <FaLocationDot />}
                  {field === "phone" && <FaPhone />}
                  {field === "email" && <MdAttachEmail />}
                  {value}
                </div>
              ))}
            </Col>
          </Row>
        ) : (
          <div className="empty-cart">
            <Lottie animationData={empty} />
            <p>عفوا لا يوجد اوردر بهذا الرقم</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default OrderPage;
