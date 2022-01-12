import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 15px;
  padding: 10px 30px;
  color: #fff;
  margin: 1em;

  ${(props) =>
    props.primary &&
    css`
      background-color: #fff;
      color: #2b2b2b;
    `}
`;

export default StyledButton;
