"use client";
import BookLoop from "@/components/BookLoop/BookLoop";
import Breadcrumbs from "@/components/Breadcrumb";
import useShop from "@/hooks/useShop";
import useWishlist from "@/hooks/useWishlist";
import React from "react";
import { Container } from "react-bootstrap";
import empty from "@/assets/LottieFiles/empty.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const WishlistPage = () => {
  const { loading, error, RemaingHandler, isDisabled, setisDisabled } =
    useShop();
  const { WishListWithQuantity } = useWishlist();

  return (
    <Container style={{ maxWidth: "1575px" }}>
      <div className="reverse-Direction">
        <Breadcrumbs />
      </div>
      {WishListWithQuantity.length > 0 ? (
        <BookLoop
          Books={WishListWithQuantity}
          loading={loading}
          error={error}
          RemaingHandler={RemaingHandler}
          isDisabled={isDisabled}
          setisDisabled={setisDisabled}
          isfav={true}
        />
      ) : (
        <div className="empty-cart">
          <Lottie animationData={empty} />
          <p>قائمة المفضلة فارغة</p>
        </div>
      )}
    </Container>
  );
};

export default WishlistPage;
