import Loading from "@/Loading/Loading";
import { AddItemToCart } from "@/Redux/features/Cart/CartSlice";
import { AddItemToWishList } from "@/Redux/features/Wishlist/WishlistSlice";
import { useAppDispatch } from "@/Redux/hooks";
import { Button, IconButton, Rating, Tooltip } from "@mui/material";
import Image from "next/image";
import React, { memo } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { BiSolidCartAdd } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const BookLoop: React.FC<BooksListProps> = ({
  Books,
  loading,
  error,
  RemaingHandler,
  isDisabled,
  setisDisabled,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Loading status={loading} error={error}>
      <Row>
        {Books.map((el, idx) => {
          return (
            <Col key={idx} xs={6} sm={6} md={6} lg={2} className="book-Card">
              <div className="bookfav">
                <div className="discount">خصم 19%</div>
                {el.isLiked ? (
                  <Tooltip title="Item added to wishlist">
                    <IconButton>
                      <FaHeart className="fav-icon" style={{ color: "red" }} />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Add to favourites">
                    <IconButton
                      onClick={() => {
                        dispatch(AddItemToWishList(el.id));
                      }}
                    >
                      <FaRegHeart className="fav-icon" />
                    </IconButton>
                  </Tooltip>
                )}
              </div>
              <Image
                src={el.img}
                alt={el.title}
                height={100}
                width={100}
                className="img-fluid"
              />
              <div className="BookDetails">
                <div className="desc">
                  <div className="title">كتاب {el.title} </div>
                  <Rating
                    name="simple"
                    value={5}
                    style={{ direction: "ltr" }}
                  />

                  <div className="price">
                    السعر : {el.price}{" "}
                    <span>{Number(el.price / 0.9).toFixed(0)}</span>
                  </div>
                </div>
                {el.Qunatity > 0 ? (
                  <div className="qty">
                    اشتريت {el.Qunatity} المتاح للشراء{" "}
                    {RemaingHandler(el.max, el.Qunatity)}
                  </div>
                ) : (
                  ""
                )}
                <Button
                  className="add"
                  disabled={isDisabled || el.max == el.Qunatity}
                  onClick={() => {
                    dispatch(AddItemToCart(el.id));
                    setisDisabled(true);
                  }}
                >
                  {isDisabled ? (
                    <>
                      <Spinner animation="border" size="sm" /> تحميل ...
                    </>
                  ) : (
                    <>
                      {el.Qunatity === el.max ? (
                        "لقد وصلت للحد الاقصي"
                      ) : (
                        <>
                          أضف للسلة <BiSolidCartAdd />
                        </>
                      )}
                    </>
                  )}
                </Button>
              </div>
            </Col>
          );
        })}
      </Row>
    </Loading>
  );
};

export default memo(BookLoop);
