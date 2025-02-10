import { GetAllCartBooksThunk } from "@/Redux/features/Cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { useEffect, useState } from "react";

const useCart = () => {
  const dispatch = useAppDispatch();
  const [isAnimate, setIsAnimate] = useState(false);
  const wishlist = useAppSelector((s) => s.wishlist.items);
  const [isAnimateWishlist, setisAnimateWishlist] = useState(false);

  const { items, productFullInfo } = useAppSelector((s) => s.cart);
  useEffect(() => {
    dispatch(GetAllCartBooksThunk());
  }, [dispatch]);

  const TotalQuantity = Object.values(items).reduce(
    (acc, item) => acc + item,
    0
  );
  const CartInfo = productFullInfo.map((el) => ({
    ...el,
    Qunatity: items[el.id],
  }));

  useEffect(() => {
    if (!TotalQuantity) {
      return;
    }
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [TotalQuantity]);
  useEffect(() => {
    if (!wishlist.length) {
      return;
    }
    setisAnimateWishlist(true);

    const debounce = setTimeout(() => {
      setisAnimateWishlist(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [wishlist.length]);
  const SubTotal = () => {
    let total = 0;
    CartInfo.forEach(
      (product) => (total += product.price * (product.Qunatity ?? 0))
    );
    return total;
  };
  return {
    TotalQuantity,
    isAnimate,
    quantityStyle: `basketQuantity ${isAnimate ? "pumpCartQuantity" : ""}`,
    CartInfo,
    wishlistStyle: `basketQuantity ${
      isAnimateWishlist ? "pumpCartQuantity" : ""
    }`,
    SubTotal,
  };
};
export default useCart;
