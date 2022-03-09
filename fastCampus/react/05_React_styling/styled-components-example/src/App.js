import logo from "./logo.svg";
import "./App.css";
import styled, { css, createGlobalStyle } from "styled-components";
import StyledButton from "./components/StyledButton";
import StyledA from "./components/StyledA";

const PrimaryStyledButton = styled(StyledButton)``;

const UppercaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);

const MyButton = (props) => (
  <button className={props.className} children={`MyButton ${props.children}`} />
);

const StyledMyButton = styled(MyButton)`
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

const GlobalStyle = createGlobalStyle`
  button {
    color: yellow;
  }
`;

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <StyledButton>버튼</StyledButton>
        <StyledButton primary>버튼</StyledButton>
        <PrimaryStyledButton>버튼</PrimaryStyledButton>
        <StyledButton as='div'>버튼</StyledButton>
        <StyledButton as={UppercaseButton}>ranja</StyledButton>
        <StyledMyButton primary>ranja</StyledMyButton>

        <StyledA>얍</StyledA>
      </header>
    </div>
  );
}

export default App;
