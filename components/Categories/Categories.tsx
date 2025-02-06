import Loading from "@/Loading/Loading";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";

const Categories = ({ loading, Categories }: ICategories) => {
  console.log("cat");

  return (
    <Loading error={null} status={loading}>
      <Row className="Categoris">
        {Categories.map((el, idx) => (
          <Col
            as={Link}
            href={`categories/${el.cat}`}
            key={idx}
            className="categoris-Card"
            lg={2}
          >
            <Image
              src={el.img}
              alt=""
              width={70}
              height={70}
              className="img-fluid"
            />
            <div className="BookDetails">
              <div className="desc">
                <div className="title">كتاب {el.title} </div>
                <div className="num">عدد الكتب المتاحة : {el.num}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Loading>
  );
};

export default memo(Categories);
