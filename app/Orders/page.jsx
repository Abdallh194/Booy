"use client";

import { Button } from "@mui/material";
import React from "react";
import { Container, Form, FormControl } from "react-bootstrap";
import useOrder from "@/hooks/useOrder";

const Page = () => {
  const { handleSearch, inputRef, searchedOrder } = useOrder();
  return (
    <Container className="order">
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
          <div>
            <h4>تفاصيل الطلب</h4>
            <p>
              <strong>رقم الطلب:</strong> {searchedOrder.orderId}
            </p>
            <h5>بيانات المستخدم:</h5>
            <p>
              <strong>الاسم:</strong> {searchedOrder.UserInfo.formData.name}
            </p>
            <p>
              <strong>البريد الإلكتروني:</strong>{" "}
              {searchedOrder.UserInfo.formData.email}
            </p>
            <p>
              <strong>رقم الهاتف:</strong>{" "}
              {searchedOrder.UserInfo.formData.phone}
            </p>
            <p>
              <strong>العنوان:</strong>{" "}
              {searchedOrder.UserInfo.formData.address}
            </p>

            <h5>تفاصيل السلة:</h5>
            {searchedOrder.CartInfo.map((item) => (
              <div key={item.id}>
                <p>
                  <strong>المنتج:</strong> {item.title}
                </p>
                <p>
                  <strong>السعر:</strong> {item.price} جنيه
                </p>
                <p>
                  <strong>الكمية:</strong> {item.Qunatity}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>لم يتم العثور على الطلب!</p>
        )}
      </div>
    </Container>
  );
};

export default Page;
