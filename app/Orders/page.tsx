"use client";
import { Button } from "@mui/material";
import React from "react";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import useOrder from "@/hooks/useOrder";
import ProductBillDetails from "../../components/cart/ProductBillDetails";
import ProductsDetails from "@/components/Order/ProductsDetails";
import { IoMdPerson } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import empty from "@/assets/LottieFiles/empty.json";
import loadingAnimation from "@/assets/LottieFiles/loadingAnimation.json";
import dynamic from "next/dynamic";
import Breadcrumbs from "@/components/Breadcrumb";
import { DeleteOrderByOrderId } from "@/Redux/features/Orders/OrderSlice";
import { useAppDispatch } from "@/Redux/hooks";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const Page = () => {
  const { handleSearch, inputRef, searchedOrder, SubTotal, loading } =
    useOrder();
  const dispatch = useAppDispatch();

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
        {searchedOrder ? (
          searchedOrder.CartInfo.length > 0 ? (
            loading ? (
              <div className="empty-cart loading-book">
                <Lottie animationData={loadingAnimation} />
              </div>
            ) : (
              <>
                <Row>
                  <Col md={12} lg={4} className="border-left order-card">
                    <ProductBillDetails CartInfo={searchedOrder.CartInfo} />
                    <hr />
                    <div className="d-flex justify-content-between">
                      <div className="bill-head">الإجمالي</div>
                      <div className="bill-head">{SubTotal()} جنيه </div>
                    </div>
                  </Col>
                  <Col md={12} lg={4} className="border-left order-card">
                    <ProductsDetails CartInfo={searchedOrder.CartInfo} />
                  </Col>
                  <Col md={12} lg={4} className="order-card">
                    <div className="card-head">معلومات التوصيل </div>
                    <div className="bill-head m-2">
                      <IoMdPerson /> {searchedOrder.UserInfo.formData.name}
                    </div>
                    <div className="bill-head m-2">
                      <FaLocationDot />{" "}
                      {searchedOrder.UserInfo.formData.address}
                    </div>
                    <div className="bill-head m-2">
                      <FaPhone /> {searchedOrder.UserInfo.formData.phone}
                    </div>
                    <div className="bill-head m-2">
                      <MdAttachEmail /> {searchedOrder.UserInfo.formData.email}
                    </div>
                  </Col>
                </Row>
                <Button
                  onClick={() => {
                    dispatch(DeleteOrderByOrderId(searchedOrder.orderId));
                  }}
                >
                  حذف الاوردر
                </Button>
              </>
            )
          ) : (
            "  النتيجه : "
          )
        ) : (
          <div className="empty-cart">
            <Lottie animationData={empty} />
            <p>عفوا لا يوجد اوردر بهذا الرقم </p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Page;
