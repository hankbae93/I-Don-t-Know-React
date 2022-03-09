import logo from "./logo.svg";
import "./App.css";
import { Calendar } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ClockCircleOutlined />
        <img src={logo} className='App-logo' alt='logo' />
        <Calendar />
      </header>
    </div>
  );
}

export default App;
