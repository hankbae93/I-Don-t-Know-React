import logo from "./logo.svg";
import "./App.css";
import A from "./components/A";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <A />
        <Example1 />
        <Example2 />
        <Example3 />
      </header>
    </div>
  );
}

export default App;
