import { useAppSelector } from "@/Redux/hooks";
import { useEffect, useRef, useState } from "react";

const useOrder = () => {
  const inputRef = useRef(null);
  const { OrderData } = useAppSelector((state) => state.order);
  const [loading, isloading] = useState(false);
  const [searchedOrder, setSearchedOrder] = useState({
    orderId: 0,
    CartInfo: [],
    UserInfo: {
      formData: {
        name: "Abdallh Sabry",
        email: "Example@example.com",
        phone: 1,
        address: "قطور الغربيه, قطور",
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
  const handleSearch = (e) => {
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
  return { inputRef, searchedOrder, handleSearch, SubTotal, loading };
};
export default useOrder;
