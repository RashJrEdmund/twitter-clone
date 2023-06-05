import styled from "@emotion/styled";

const StyledSelectTag = styled.div`
  color: #000;
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 15px;

  .select_holder {
    /* border: 1px solid red; */
    position: relative;
    display: flex;
    width: 100%;
    height: fit-content;
    min-height: 70px;
    flex: 1.8;

    .months {
      width: 100%;

      &::before {
        content: "Month";
        color: #198ad5;
      }
    }

    .days {
      min-width: 100%;
    }

    .years {
      width: 100%;
    }

    & > span {
      position: absolute;
      top: 0;
      left: 0;
      margin: 5px 13px;
      color: #198ad5;
      font-weight: 500;
      font-size: 14px;
    }

    &:nth-of-type(2) {
      flex: 1;
    }

    &:nth-of-type(3) {
      flex: 1;
    }
  }
`;

export default StyledSelectTag;
