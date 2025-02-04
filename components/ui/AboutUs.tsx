import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="AboutBooky">
      <Container>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="AboutBooky-Card Image-Card"
          >
            <div className="img-container">
              <Image
                src="/about_img.jpg"
                alt="About Booky"
                width={500}
                height={500}
                className="img-fluid"
              />
              <div className="desc1">إقرأ مجانا</div>
              <div className="desc2">كل الكتب متاحة</div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="AboutBooky Text-Card">
            <h3>معلومات حول</h3>
            <div className="head">
              <span className="pt_01">مكتــ</span>
              <span className="pt_02">ــبتي</span>
            </div>
            <div className="desc">
              مكتبتي هتوفرلك اي كتاب ممكن تطلبه اذا كان من الكتب الحديثه او
              القديمه مهما كان نوعها بأرخص الاسعار ويمكنك استعاره بعض الكتب
              مجانا مجموعة من الكتب. هذه المجموعة والخدمات يستخدمها الناس الذين
              لا يريدون أو لا يستطيعون شراء مجموعة موسعة لأنفسهم
            </div>
            <div className="btns d-flex justify-content-between">
              <Link href="/" className="LoginBtn">
                معلومات اكتر
              </Link>
              <Link href="/Shop" className="LoginBtn">
                تسوق الان
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
