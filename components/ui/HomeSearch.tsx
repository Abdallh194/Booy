import Link from "next/link";
import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";

import Image from "next/image";
import Socials from "./Socials";

const HomeSearch = () => {
  return (
    <div className="About">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={5} className="About-Card Logo-Card">
            <div className="content">
              <Link href="/" className="logo">
                <span className="pt_01">مكتــ</span>
                <span className="pt_02">ــبتي</span>
              </Link>
              <h6 style={{ fontWeight: "bold" }} className="mt-5">
                اسرع موقع فى مصر
              </h6>
              <Form className="searchform">
                <FormControl
                  type="text"
                  placeholder="إبحث عن الكتاب المفضل لديك ....."
                />
                <Button type="submit" className="btn btn-primary">
                  إبحث الأن
                </Button>
              </Form>
              <div className="desc">
                يمكنك التواصل معنا عن طريق مواقع التواصل
              </div>
              <Socials />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={7} className="About-Card Books-Card">
            <Image
              src="/about.png"
              alt="about"
              width={650}
              height={300}
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeSearch;
