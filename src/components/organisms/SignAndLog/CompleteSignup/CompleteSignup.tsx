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
import { useAuth } from "@/hooks/AuthContext";
import SelectTags from "../selectTags/SelectTags";
import { auth } from "@/configs/firebase";

type Props = {
  open: boolean;
  closeLog: () => void;
  createAccModal: () => void;
  toConfirmPasswordModal: () => void;
};

export default function CompleteSingup({
  closeLog,
  open,
  createAccModal,
  toConfirmPasswordModal,
}: Props) {
  const [loader, setLoader] = useState<{ loading: boolean; message: string }>({
    loading: false,
    message: "",
  });

  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    password: "",
    month: "",
    day: "",
    year: "",
  });

  const [signType, setSignType] = useState<string>("phone");

  useEffect(() => {
    const sessionData = sessionStorage.getItem("signData");
    if (sessionData) {
      const data = JSON.parse(sessionData);
      setFormData(data);

      if (data.phone) {
        setSignType("phone");
      } else setSignType("email");
    } else createAccModal();
  }, []);

  const handleSubmit: (e: any) => void = async (e) => {
    e.preventDefault();
    toConfirmPasswordModal();
  };

  const goBacktocreateAccModal = () => {
    createAccModal();
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
          onFocus={goBacktocreateAccModal}
        />

        <SignInput
          placeholder={signType}
          maxW="unset"
          value={formData[signType]}
          onFocus={goBacktocreateAccModal}
        />

        <SignInput
          placeholder="date of birth"
          maxW="unset"
          value={formData.day + " " + formData.month + " " + formData.year}
          onFocus={goBacktocreateAccModal}
        />

        <div className="complete_paragraph">
          <AnchorTag>By signing up, you agree to the </AnchorTag>
          <AnchorTag link> Terms of Service</AnchorTag>
          <AnchorTag>and</AnchorTag>
          <AnchorTag link> Privacy Policy, </AnchorTag>
          <AnchorTag>including </AnchorTag>
          <AnchorTag link>Cokie Use. </AnchorTag>
          <AnchorTag>
            Twitter may use your contact information, including your email
            address and phone number for purposes outlined in our Privacy
            Policy, like keeping your account secure and personalising our
            services, including ads.
          </AnchorTag>
          <AnchorTag link> Learn more </AnchorTag>
          <AnchorTag>
            Others will be able to find you by email or phone number, when
            provided, unless you choose otherwise
          </AnchorTag>
          <AnchorTag link> here</AnchorTag>
        </div>

        <SignButton
          color="#fff"
          bg="#198ad5"
          padd="9px 70px"
          fill
          maxW="unset"
          type="submit"
        >
          Sign up
        </SignButton>
      </form>
    </StyledSingIn_Login>
  );
}
