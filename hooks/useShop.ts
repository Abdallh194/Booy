import { GetAllBooksThunck } from "@/Redux/features/Books/BooksSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { useEffect, useState, useMemo } from "react";

const useShop = () => {
  const dispatch = useAppDispatch();
  const { Books, error, loading } = useAppSelector((s) => s.books);
  useEffect(() => {
    if (!Books.length) {
      dispatch(GetAllBooksThunck());
    }
  }, [dispatch, Books.length]);

  const [selectedCat, setselectedcat] = useState("All");
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);
  const { items } = useAppSelector((s) => s.cart);
  const wishlistitems = useAppSelector((s) => s.wishlist.items);
  const [isDisabled, setisDisabled] = useState(false);

  const ProductsFullInfo = useMemo(() => {
    return Books.map((el) => ({
      ...el,
      Qunatity: items[el.id] || 0,
      isLiked: wishlistitems.includes(el.id),
    }));
  }, [Books, items, wishlistitems]);

  useEffect(() => {
    if (selectedCat === "All") {
      setFilteredBooks(ProductsFullInfo);
    } else {
      setFilteredBooks(
        ProductsFullInfo.filter((book) => book.cat === selectedCat)
      );
    }
  }, [selectedCat, ProductsFullInfo]);

  useEffect(() => {
    if (!isDisabled) return;
    const debounce = setTimeout(() => {
      setisDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isDisabled]);

  const RemaingHandler = (max: number, qty: number) => max - qty;

  return {
    RemaingHandler,
    error,
    ProductsFullInfo,
    loading,
    isDisabled,
    setisDisabled,
    setselectedcat,
    filteredBooks,
    selectedCat,
    Books,
  };
};

export default useShop;
