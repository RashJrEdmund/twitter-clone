import React from "react";
import { StyledPTag } from "@/components/atoms/LoginRegistAtoms";
import { useAuth } from "@/hooks/AuthContext";
import styled from "@emotion/styled";

type Props = { userInfo: any };

const StyledLogout = styled.div`
  cursor: default;
  position: absolute;
  top: calc(-100% - 20px);
  left: 50%;
  transform: translate(-50%);
  background-color: #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start˝;
  gap: 15px;
  justify-content: center;
  width: min(90vw, 300px);
  max-width: fit-content;
  height: fit-content;
  white-space: nowrap;
  padding: 15px 25px;

  p {
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    top: calc(-100% - 50px);
    left: 0;
    transform: translate(0);
  }
`;

export default function Logout({ userInfo }: Props) {
  const { logout } = useAuth();

  return (
    <StyledLogout>
      <p color="#000">Add an existing account</p>
      <p color="#000" onClick={logout}>
        Log out @
        {userInfo?.username || userInfo?.displayname.split(" ").pop() || "user"}
      </p>
    </StyledLogout>
  );
}
