import logo from "./logo.svg";
import "./App.css";
import withPersonData from "./withPersonData";

function App({ data, setData, message, handleMessage }) {
  return (
    <div className='App'>
      <header className='App-header'>
        <input value={message} onChange={handleMessage} />
        <img src={logo} className='App-logo' alt='logo' />
        {data.map((person, i) => {
          return (
            <p>
              {person.name}님 연세가 {person.age}
            </p>
          );
        })}
      </header>
    </div>
  );
}

export default withPersonData(App);
