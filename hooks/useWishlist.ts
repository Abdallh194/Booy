import { useAppSelector } from "@/Redux/hooks";
import { useMemo } from "react";
import { shallowEqual } from "react-redux";
const useWishlist = () => {
  const wishlistitems = useAppSelector(
    (state) => state.wishlist.items,
    shallowEqual
  );
  const cartitems = useAppSelector((state) => state.cart.items, shallowEqual);
  const { Books } = useAppSelector((state) => state.books, shallowEqual);

  const WishListWithQuantity = useMemo(() => {
    return Books.filter((p) => wishlistitems.includes(p.id)).map((el) => ({
      ...el,
      Qunatity: cartitems[el.id] || 0,
      isLiked: wishlistitems.includes(el.id),
    }));
  }, [Books, wishlistitems, cartitems]);

  return { WishListWithQuantity };
};

export default useWishlist;
