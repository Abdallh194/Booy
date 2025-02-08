import { useAppSelector } from "@/Redux/hooks";
import { useRef, useState } from "react";

const useOrder = () => {
  const inputRef = useRef(null);
  const { OrderData } = useAppSelector((state) => state.order);
  const [searchedOrder, setSearchedOrder] = useState();

  const handleSearch = (e) => {
    e.preventDefault();

    if (inputRef.current) {
      const orderId = Number(inputRef.current.value);
      const foundOrder = OrderData.find((order) => order.orderId === orderId);
      setSearchedOrder(foundOrder);
    }
  };
  return { inputRef, searchedOrder, handleSearch };
};
export default useOrder;
