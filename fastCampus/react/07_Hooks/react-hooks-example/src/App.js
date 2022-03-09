import logo from "./logo.svg";
import "./App.css";
import Example from "./components/Example";
import useWindowWidth from "./hooks/useWindowWidth";
import withHasMouted from "./hocs/withHasMouted";
import useHasMounted from "./hooks/useHasMounted";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4";

function App({ hasMounted }) {
  const width = useWindowWidth();
  const hasMountedFromHooks = useHasMounted();
  console.log(hasMounted, hasMountedFromHooks);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        {width}
        {/* <Example /> */}
        {/* <Example2 /> */}
        {/* <Example3 /> */}
        <Example4 />
      </header>
    </div>
  );
}

export default withHasMouted(App);
