/* eslint-disable no-shadow */
import styled from "@emotion/styled";
import { type } from "os";
import { useState } from "react";

interface ComponentParams {
  theme?: string;
}

const StyledAlertMessage = styled.div<ComponentParams>`
  @keyframes alertAnime {
    from {
      margin: 0;
    }
    to {
      margin: 3rem auto;
    }
  }

  animation-name: alertAnime;
  animation-duration: 0.5s;

  background-color: ${({ theme = "dark" }) =>
    theme === "dark" ? "#198ad5" : "#fff"};
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  margin: 3rem auto;
  padding: 1rem;
  z-index: 10;

  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 10px;

  p {
    color: ${({ theme = "dark" }) => (theme === "dark" ? "#fff" : "#000")};
  }
`;

const useAlert = () => {
  const [alertMsg, setAlertMsg] = useState({
    message: "",
    show: false,
  });

  function AlertComponent({ theme }: ComponentParams) {
    return (
      <StyledAlertMessage theme={theme}>
        <p>{alertMsg.message}</p>
      </StyledAlertMessage>
    );
  }

  const displayAlert = (msg: string) => {
    setAlertMsg(() => ({ message: msg, show: true }));

    setTimeout(() => {
      setAlertMsg(() => ({ message: "", show: false }));
    }, 2000);
  };

  return { AlertComponent, displayAlert, alertMsg };
};

export default useAlert;
