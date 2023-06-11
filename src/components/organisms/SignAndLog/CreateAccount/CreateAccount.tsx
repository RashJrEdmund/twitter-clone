/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import {
  SignInput,
  StyledHeader,
  Overlay,
  CancelBtn,
  StyledTwitterIcon,
  StyledPTag,
} from "../../../atoms/LoginRegistAtoms";
import SignButton from "../../../atoms/SignButton";

import AnchorTag from "../../../atoms/AnchorTag";
import StyledSingIn_Login from "../../../molecules/StyledSingIn_Login";
import SelectTags from "../selectTags/SelectTags";

type Props = {
  open: boolean;
  closeLog: () => void;
  toCompleteSignupModal: () => void;
};

export default function CreateAccount({
  closeLog,
  open,
  toCompleteSignupModal,
}: Props) {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    password: "",
    month: "",
    day: "",
    year: "",
  });

  const [formFilled, setFormFilled] = useState<boolean>(false);
  const [signType, setSignType] = useState<string>("phone");

  useEffect(() => {
    const sessionData = sessionStorage.getItem("signData");
    if (sessionData) {
      const data = JSON.parse(sessionData);
      setFormData(data);

      if (data.phone) {
        setSignType("phone");
      } else setSignType("email");
    } else {
      setSignType("email");
    }
  }, []);

  useEffect(() => {
    if (
      formData.name &&
      formData[signType] &&
      formData.month &&
      formData.day &&
      formData.month &&
      formData.year
    ) {
      setFormFilled(true);
    } else setFormFilled(false);
  }, [formData]);

  const switchBetweenPhoneEmail = () => {
    setFormData((prev: any) => ({ ...prev, [signType]: "" }));
    setSignType((prev: string) => (prev === "phone" ? "email" : "phone"));
  };

  const handleSubmit: (e: any) => void = async (e) => {
    e.preventDefault();

    if (signType === "email") {
      if (!formData.name.trim() || !formData[signType].trim())
        return;

      sessionStorage.setItem("signData", JSON.stringify(formData));
      toCompleteSignupModal();
    }
  };

  return (
    <StyledSingIn_Login open={open}>
      <Overlay />

      <form className="container" onSubmit={handleSubmit}>
        <CancelBtn onClick={closeLog} />

        <StyledTwitterIcon />

        <StyledHeader color="#000" weight="600" size="30px" align="left">
          Create your account
        </StyledHeader>

        <SignInput
          placeholder="name"
          maxW="unset"
          value={formData.name}
          onChange={({ target: { value } }) =>
            setFormData((prev: any) => ({ ...prev, name: value }))
          }
        />

        <SignInput
          placeholder={signType}
          maxW="unset"
          type={signType}
          value={formData[signType]}
          onChange={({ target: { value } }) =>
            setFormData((prev: any) => ({ ...prev, [signType]: value }))
          }
        />

        <AnchorTag fill link align="right" onClick={switchBetweenPhoneEmail}>
          Use {signType === "phone" ? "email" : "phone"} instead.
        </AnchorTag>

        <StyledPTag color="#000" weight="600" align="left" fill>
          Date of birth
        </StyledPTag>

        <AnchorTag fill align="left">
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </AnchorTag>

        <SelectTags setFormData={setFormData} formData={formData} />

        <SignButton
          color="#fff"
          bg={formFilled ? "#198ad5" : "#000000dd"}
          padd="9px 70px"
          fill
          maxW="unset"
          margin="5rem 0 0"
          type="submit"
        >
          Next
        </SignButton>
      </form>
    </StyledSingIn_Login>
  );
}
