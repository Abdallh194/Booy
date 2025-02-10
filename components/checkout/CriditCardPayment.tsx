"use client";

import {
  CardActions,
  CardContent,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@mui/joy";
import { Alert } from "@mui/material";
import { memo, useState, useCallback, useMemo } from "react";
import { Form, Spinner } from "react-bootstrap";
import { FaCheck, FaCreditCard, FaInfo } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

type TCreditProps = {
  setConfirmCreditCard: (value: boolean) => void;
  setIsAnimate: (value: boolean) => void;
  confirmCreditCard: boolean;
  isAnimate: boolean;
};

const CreditCardPayment = ({
  setConfirmCreditCard,
  confirmCreditCard,
  isAnimate,
  setIsAnimate,
}: TCreditProps) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholder: "",
  });

  const [dataError, setDataError] = useState(false);

  const isFormValid = useMemo(() => {
    return (
      formData.cardNumber.length === 16 &&
      /^\d{2}\/\d{2}$/.test(formData.expiryDate) &&
      /^[0-9]{3,4}$/.test(formData.cvv) &&
      formData.cardholder.trim().length > 0
    );
  }, [formData]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(() => {
    setIsAnimate(true);
    if (isFormValid) {
      setConfirmCreditCard(true);
      setDataError(false);
    } else {
      setDataError(true);
      setConfirmCreditCard(false);
    }
  }, [isFormValid, setIsAnimate, setConfirmCreditCard]);

  return (
    <Form className="card-content" onSubmit={(e) => e.preventDefault()}>
      {dataError && (
        <Alert variant="filled" severity="error">
          هناك بعض الأخطاء في بيانات الكارت
        </Alert>
      )}
      <h3 className="mt-4"> بيانات كارت الدفع</h3>
      <CardContent
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>رقم الكارت </FormLabel>
          <Input
            className="input"
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            endDecorator={<FaCreditCard />}
            onChange={handleInputChange}
            disabled={confirmCreditCard}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>تاريخ انتهاء الكارت (MM/YY)</FormLabel>
          <Input
            className="input"
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            value={formData.expiryDate}
            endDecorator={<FaCreditCard />}
            onChange={handleInputChange}
            required
            disabled={confirmCreditCard}
          />
        </FormControl>
        <FormControl>
          <FormLabel>CVC/CVV</FormLabel>
          <Input
            className="input"
            type="text"
            name="cvv"
            value={formData.cvv}
            endDecorator={<FaInfo />}
            onChange={handleInputChange}
            required
            disabled={confirmCreditCard}
          />
        </FormControl>
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>إسم حامل الكارت</FormLabel>
          <Input
            className="input"
            name="cardholder"
            placeholder="اسم حامل الكارت بالكامل"
            value={formData.cardholder}
            onChange={handleInputChange}
            endDecorator={<IoMdPerson />}
            required
            disabled={confirmCreditCard}
          />
        </FormControl>
        <Checkbox label="حفظ الكارت" sx={{ gridColumn: "1/-1", my: 1 }} />
        <CardActions sx={{ gridColumn: "1/-1" }}>
          <Button
            variant="solid"
            color={confirmCreditCard ? "success" : "primary"}
            type="submit"
            disabled={isAnimate || confirmCreditCard}
            onClick={handleSubmit}
          >
            {isAnimate ? (
              <>
                <Spinner animation="border" size="sm" /> يتم المراجعة...
              </>
            ) : confirmCreditCard ? (
              <>
                تم تأكيد الدفع <FaCheck />
              </>
            ) : (
              <>دفع</>
            )}
          </Button>
        </CardActions>
      </CardContent>
    </Form>
  );
};

export default memo(CreditCardPayment);
