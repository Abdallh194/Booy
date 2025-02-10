import Loading from "@/Loading/Loading";
import { AddItemToCart } from "@/Redux/features/Cart/CartSlice";
import {
  AddItemToWishList,
  DeleteFavItem,
} from "@/Redux/features/Wishlist/WishlistSlice";
import { useAppDispatch } from "@/Redux/hooks";
import { Button, IconButton, Rating, Tooltip } from "@mui/material";
import Image from "next/image";
import React, { memo } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { BiSolidCartAdd } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const BookLoop: React.FC<BooksListProps> = ({
  Books,
  loading,
  error,
  RemaingHandler,
  isDisabled,
  setisDisabled,
  isfav,
}) => {
  const dispatch = useAppDispatch();

  const handleWishlistClick = (id: number, isLiked: boolean) => {
    if (isLiked) {
      dispatch(DeleteFavItem(id));
    } else {
      dispatch(AddItemToWishList(id));
    }
  };

  return (
    <Loading status={loading} error={error}>
      <Row id="Shopping">
        {Books.map((book, idx) => {
          const isMaxReached = book.Qunatity === book.max;

          return (
            <Col key={idx} xs={6} sm={6} md={6} lg={2} className="book-Card">
              <div className="bookfav">
                {isfav ? (
                  <div
                    className="dlt"
                    onClick={() => dispatch(DeleteFavItem(book.id))}
                  >
                    <RiDeleteBin5Line />
                  </div>
                ) : (
                  <>
                    <div className="discount">خصم 19%</div>
                    <Tooltip
                      title={
                        book.isLiked
                          ? "Item added to wishlist"
                          : "Add to favourites"
                      }
                    >
                      <IconButton
                        onClick={() =>
                          handleWishlistClick(book.id, book.isLiked)
                        }
                      >
                        {book.isLiked ? (
                          <FaHeart
                            className="fav-icon"
                            style={{ color: "red" }}
                          />
                        ) : (
                          <FaRegHeart className="fav-icon" />
                        )}
                      </IconButton>
                    </Tooltip>
                  </>
                )}
              </div>

              <Image
                src={book.img}
                alt={book.title}
                height={100}
                width={100}
                className="img-fluid"
              />

              <div className="BookDetails">
                <div className="desc">
                  <div className="title">كتاب {book.title} </div>
                  <Rating
                    name="simple"
                    value={5}
                    style={{ direction: "ltr" }}
                  />

                  <div className="price">
                    السعر : {book.price} ج.م{" "}
                    <span> {Number(book.price / 0.9).toFixed(0)} ج.م</span>
                  </div>
                </div>

                {book.Qunatity > 0 && (
                  <div className="qty">
                    اشتريت {book.Qunatity} المتاح للشراء{" "}
                    {RemaingHandler(book.max, book.Qunatity)}
                  </div>
                )}

                <Button
                  className="add"
                  disabled={isDisabled || isMaxReached}
                  onClick={() => {
                    dispatch(AddItemToCart(book.id));
                    setisDisabled(true);
                  }}
                >
                  {isDisabled ? (
                    <>
                      <Spinner animation="border" size="sm" /> تحميل ...
                    </>
                  ) : isMaxReached ? (
                    "لقد وصلت للحد الأقصى"
                  ) : (
                    <>
                      أضف للسلة <BiSolidCartAdd />
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
