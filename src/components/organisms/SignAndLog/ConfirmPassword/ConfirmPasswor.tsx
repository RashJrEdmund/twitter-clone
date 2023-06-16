/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import {
  SignInput,
  StyledHeader,
  Overlay,
  CancelBtn,
  StyledTwitterIcon,
} from "../../../atoms/LoginRegistAtoms";
import SignButton from "../../../atoms/SignButton";

import AnchorTag from "../../../atoms/AnchorTag";
import StyledSingIn_Login from "../../../molecules/StyledSingIn_Login";
import { auth, db } from "@/configs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

type Props = {
  open: boolean;
  closeLog: () => void;
  createAccModal: () => void;
};

export default function ConfirmPasswordModal({
  closeLog,
  open,
  createAccModal,
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

  const [pass, setPass] = useState<{ password: string; confirm: string }>({
    password: "",
    confirm: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [formErr, setFormErr] = useState<boolean>(false);

  const [signType, setSignType] = useState<string>("phone");

  const checkSession = () => {
    const sessionData = sessionStorage.getItem("signData");
    if (sessionData) {
      const data = JSON.parse(sessionData);
      if (
        data.name &&
        (data.email || data.phone) &&
        data.month &&
        data.day &&
        data.month &&
        data.year
      ) {
        if (data.phone) setSignType("phone");
        else setSignType("email");
        setFormData(data);
      }
    } else {
      createAccModal();
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  const handleSubmit: (e: any) => void = async (e) => {
    e.preventDefault();
    checkSession();

    if (
      !pass.confirm.trim() ||
      !pass.password.trim() ||
      pass.confirm !== pass.password ||
      pass.confirm.length < 6 ||
      pass.password.length < 6
    )
      return setFormErr(true);

    if (formData.email) {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, formData.email, pass.password)
        .then(async ({ user: { uid } }) => {
          const username = formData.name;
          const dateOfBirth = [
            formData.day,
            formData.month,
            formData.year,
          ].join("/");
          const newUser = { id: uid, username, dateOfBirth, bio: "" };
          const userCollectionRef = collection(db, "users");

          await setDoc(doc(userCollectionRef, `/${uid}`), newUser); // returns undefined
        })
        .finally(() => setLoading(false));
    }
  };

  const goBacktocreateAccModal = () => {
    createAccModal();
  };

  const handlePasswordField = ({ target: { value } }: any) => {
    setPass((prev) => ({ ...prev, password: value }));
    if (formErr) setFormErr(false);
  };

  const handleConfirmField = ({ target: { value } }: any) => {
    setPass((prev) => ({ ...prev, confirm: value }));
    if (formErr) setFormErr(false);
  };

  return (
    <StyledSingIn_Login open={open}>
      <Overlay />

      <form className="container" onSubmit={handleSubmit}>
        <CancelBtn onClick={closeLog} />

        <StyledTwitterIcon />

        {loading && <p>loading...</p>}

        <StyledHeader color="#000" weight="600" size="30px" align="left">
          Create your account
        </StyledHeader>

        <SignInput
          placeholder="password"
          type="password"
          maxW="unset"
          minLength={6}
          value={pass.password}
          onChange={handlePasswordField}
        />

        <SignInput
          placeholder="confirm password"
          maxW="unset"
          type="password"
          minLength={6}
          value={pass.confirm}
          error={formErr}
          onChange={handleConfirmField}
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
