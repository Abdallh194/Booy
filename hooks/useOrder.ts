import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { useEffect, useRef, useState } from "react";

const useOrder = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { OrderData } = useAppSelector((state) => state.order);
  const [loading, isloading] = useState(false);
  const [searchedOrder, setSearchedOrder] = useState<Order | undefined>({
    orderId: 0,
    CartInfo: [],
    UserInfo: {
      formData: {
        name: "abdallh",
        address: "العتوه البحرية قطور طنطا",
        email: "Examle@example.com",
        phone: 1,
      },
    },
  });
  const SubTotal = () => {
    let total = 0;
    searchedOrder?.CartInfo.forEach(
      (product) => (total += product.price * (product.Qunatity ?? 0))
    );
    return total;
  };

  const dispatch = useAppDispatch();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      const orderId = +inputRef.current.value;
      const foundOrder = OrderData.find((order) => order.orderId === orderId);

      setSearchedOrder(foundOrder);

      isloading(true);
    }
  };
  useEffect(() => {
    if (!loading) return;
    isloading(true);
    const debounce = setTimeout(() => {
      isloading(false);
    }, 1000);
    return () => clearTimeout(debounce);
  }, [searchedOrder, loading]);
  return { inputRef, searchedOrder, handleSearch, SubTotal, loading, dispatch };
};
export default useOrder;
