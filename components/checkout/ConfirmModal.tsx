import { clearcartproductfullinfo } from "@/Redux/features/Cart/CartSlice";
import { useAppDispatch } from "@/Redux/hooks";
import Link from "next/link";
import { memo } from "react";
import Modal from "react-bootstrap/Modal";
import { FaCheck } from "react-icons/fa";

type TConfirmModalProps = {
  show: boolean;
  setShow: (value: boolean) => void;
  orderId: number;
};
function ConfirmModal({ show, setShow, orderId }: TConfirmModalProps) {
  const handleClose = () => setShow(false);
  const dispatch = useAppDispatch();

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title style={{ color: "green" }}>
            تم التاكيد والدفع <FaCheck />{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          تم التاكيد بنجاح علي بياناتك وتم الدفع بنجاح اذا كانت هناك اي مشكله
          تواصل معنا
          <div>رقم الاوردر برجاء الاحتفاظ به : {orderId}</div>
        </Modal.Body>
        <Modal.Footer>
          <Link
            href="/Orders"
            className="confirmorderbtn"
            onClick={() => dispatch(clearcartproductfullinfo())}
          >
            رؤية طلبي
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default memo(ConfirmModal);
