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
import { memo, useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { FaCheck, FaCreditCard, FaInfo } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

type TCriditProps = {
  setconfirmCriditCard: (value: boolean) => void;
  setIsAnimate: (value: boolean) => void;
  confirmCriditCard: boolean;
  isAnimate: boolean;
};
const CriditCardPayment = ({
  setconfirmCriditCard,
  confirmCriditCard,
  isAnimate,
  setIsAnimate,
}: TCriditProps) => {
  const [cardNumber, setcardNumber] = useState("");
  const [Expirydate, setExpirydate] = useState("");
  const [cvv, setcvv] = useState("");
  const [cardholder, setcardholder] = useState("");
  const [dataerror, setdataerror] = useState(false);

  return (
    <Form
      className="card-content"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {dataerror && (
        <Alert variant="filled" severity="error">
          هناك بعض الاخطاء في بيانات الكارت
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
            type="number"
            endDecorator={<FaCreditCard />}
            onChange={(e) => {
              setcardNumber(e.target.value);
            }}
            disabled={confirmCriditCard}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>تاريخ انتهاء الكارت </FormLabel>
          <Input
            className="input"
            type="number"
            endDecorator={<FaCreditCard />}
            onChange={(e) => {
              setExpirydate(e.target.value);
            }}
            required
            disabled={confirmCriditCard}
          />
        </FormControl>
        <FormControl>
          <FormLabel>CVC/CVV</FormLabel>
          <Input
            className="input"
            type="number"
            endDecorator={<FaInfo />}
            onChange={(e) => {
              setcvv(e.target.value);
            }}
            required
            disabled={confirmCriditCard}
          />
        </FormControl>
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>إسم حامل الكارت</FormLabel>
          <Input
            className="input"
            placeholder=" اسم حامل الكارت بكامل"
            onChange={(e) => {
              setcardholder(e.target.value);
            }}
            endDecorator={<IoMdPerson />}
            required
            disabled={confirmCriditCard}
          />
        </FormControl>
        <Checkbox label="حفظ الكارت" sx={{ gridColumn: "1/-1", my: 1 }} />
        <CardActions sx={{ gridColumn: "1/-1" }}>
          <Button
            variant="solid"
            color={confirmCriditCard ? "success" : "primary"}
            type="submit"
            disabled={isAnimate || confirmCriditCard}
            onClick={() => {
              setIsAnimate(true);
              if (
                cardholder.length > 0 &&
                cvv.length > 0 &&
                Expirydate.length > 0 &&
                cardNumber.length > 0
              ) {
                setconfirmCriditCard(true);
                setdataerror(false);
              } else {
                setdataerror(true);
                setconfirmCriditCard(false);
              }
            }}
          >
            {isAnimate ? (
              <>
                <Spinner animation="border" size="sm" /> يتم المراجعه .....
              </>
            ) : confirmCriditCard ? (
              <>
                تم تاكيد الدفع <FaCheck />
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
export default memo(CriditCardPayment);
