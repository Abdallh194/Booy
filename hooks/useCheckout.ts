import { useAppDispatch } from "@/Redux/hooks";
import { useEffect, useState } from "react";

const useCheckout = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const [confirmCriditCard, setconfirmCriditCard] = useState(false);
  const [confirmUserInfo, setconfirmUserInfo] = useState(false);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [orderId] = useState(() => Date.now());

  const [UserInfo, setUserInfo] = useState<IFormData>({
    formData: {
      name: "",
      email: "",
      phone: 0,
      address: "",
    },
    orderId: 0,
  });

  useEffect(() => {
    if (!isAnimate) {
      return;
    }
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 1200);

    return () => clearTimeout(debounce);
  }, [isAnimate]);
  return {
    setIsAnimate,
    isAnimate,
    setconfirmCriditCard,
    confirmCriditCard,
    confirmUserInfo,
    setconfirmUserInfo,
    UserInfo,
    setUserInfo,
    dispatch,
    handleShow,
    show,
    setShow,
    orderId,
  };
};
export default useCheckout;
