import { GetAllBooksThunck } from "@/Redux/features/Books/BooksSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { useEffect, useState } from "react";
const useShop = () => {
  const dispatch = useAppDispatch();
  const { Books, error, loading } = useAppSelector((s) => s.books);
  const { items } = useAppSelector((s) => s.cart);
  const wishlistitems = useAppSelector((s) => s.wishlist.items);

  const [isDisabled, setisDisabled] = useState(false);
  useEffect(() => {
    if (!isDisabled) return;
    setisDisabled(true);
    const debounce = setTimeout(() => {
      setisDisabled(false);
    }, 100);
    return () => clearTimeout(debounce);
  }, [isDisabled]);
  // product card
  const ProductsFullInfo = Books.map((el) => ({
    ...el,
    Qunatity: items[el.id] || 0,
    isLiked: wishlistitems.includes(el.id),
  }));
  useEffect(() => {
    dispatch(GetAllBooksThunck());
  }, [dispatch]);
  const RemaingHandler = (max: number, qty: number) => {
    return max - qty;
  };

  return {
    ProductsFullInfo,
    RemaingHandler,
    error,
    loading,
    isDisabled,
    setisDisabled,
  };
};
export default useShop;
