import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import { FaCheck } from "react-icons/fa";

type TConfirmModalProps = {
  show: boolean;
  setShow: (value: boolean) => void;
};
function ConfirmModal({ show, setShow }: TConfirmModalProps) {
  const handleClose = () => setShow(false);

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
        </Modal.Body>
        <Modal.Footer>
          <Link href="/Orders" className="confirmorderbtn">
            رؤية طلبي
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;
