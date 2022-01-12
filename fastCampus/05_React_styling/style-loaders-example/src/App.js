import logo from "./logo.svg";
// import "./App.scss";
import Button from "./components/Button";
import styles from "./App.module.css";
console.log(styles);

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["App"]}>
        <img src={logo} className='logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className={styles["link"]}
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
         
        </a> */}
        <Button />
      </header>
    </div>
  );
}

export default App;
