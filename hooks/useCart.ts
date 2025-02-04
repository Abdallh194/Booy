import { GetAllCartBooksThunk } from "@/Redux/features/Cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { useEffect, useState } from "react";

const useCart = () => {
  const dispatch = useAppDispatch();
  const [isAnimate, setIsAnimate] = useState(false);
  const quantityStyle = `basketQuantity ${isAnimate ? "pumpCartQuantity" : ""}`;

  useEffect(() => {
    dispatch(GetAllCartBooksThunk());
  }, [dispatch]);
  const { items } = useAppSelector((s) => s.cart);
  const TotalQuantity = Object.values(items).reduce(
    (acc, item) => acc + item,
    0
  );
  useEffect(() => {
    if (!TotalQuantity) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 100);

    return () => clearTimeout(debounce);
  }, [TotalQuantity]);
  return { TotalQuantity, isAnimate, quantityStyle };
};
export default useCart;
