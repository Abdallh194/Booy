"use client";
import { Button } from "@mui/joy";
import { Alert } from "@mui/material";
import { FormEvent, memo, useRef, useState } from "react";
import { Form, FormControl } from "react-bootstrap";

type TUserProps = {
  setconfirmUserInfo: (value: boolean) => void;
  confirmUserInfo: boolean;
  setUserInfo: (value: IFormData) => void;
};
const InputForm = ({
  confirmUserInfo,
  setconfirmUserInfo,
  setUserInfo,
}: TUserProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const AddressRef = useRef<HTMLInputElement>(null);
  const [dataerror, setdataerore] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      phone: Number(phoneRef.current?.value) || 0,
      address: AddressRef.current?.value || "",
    };
    if (
      formData.address.length > 0 &&
      formData.email.length > 0 &&
      formData.phone > 0 &&
      formData.name.length > 0
    ) {
      setconfirmUserInfo(true);
      setUserInfo({ formData });
      setdataerore(false);
    } else {
      setconfirmUserInfo(false);
      setdataerore(true);
    }
  };

  return (
    <>
      {dataerror && (
        <Alert variant="filled" severity="error">
          هناك بعض الاخطاء في بيانات الشخصية
        </Alert>
      )}
      <h3>البيانات الشخصية</h3>
      <Form onSubmit={handleSubmit} className="d-flex flex-wrap userform">
        <FormControl
          type="text"
          name="name"
          placeholder="الإسم بالكامل"
          ref={nameRef}
        />
        <FormControl
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          ref={emailRef}
        />
        <FormControl
          type="number"
          name="phone"
          placeholder="رقم الهاتف"
          ref={phoneRef}
        />
        <FormControl name="address" placeholder="العنوان" ref={AddressRef} />
        <Button
          type="submit"
          variant="solid"
          color={confirmUserInfo ? "success" : "primary"}
          className="btn btn-primary w-100"
        >
          {confirmUserInfo ? <>تم التسجيل </> : "تسجيل"}
        </Button>
      </Form>
    </>
  );
};
export default memo(InputForm);
