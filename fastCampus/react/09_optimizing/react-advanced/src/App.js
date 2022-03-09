import React, {
  Component,
  memo,
  PureComponent,
  useState,
  useRef,
  useCallback,
} from "react";

import Modal from "./components/Modal";
import MyInput from "./components/MyInput";

// // class Person extends PureComponent {
// //   // shouldComponentUpdate(prevProps) {
// //   //   for (const key in this.props) {
// //   //     if (prevProps[key] !== this.props[key]) {
// //   //       return true;
// //   //     }
// //   //   }
// //   //   return false;
// //   // }

// //   render() {
// //     console.log("person render");
// //     const { name, age } = this.props;
// //     return (
// //       <p>
// //         {name} - {age}
// //       </p>
// //     );
// //   }
// // }

// const Person = memo(({ name, age }) => {
//   console.log("person render");
//   return (
//     <p>
//       {name} - {age}
//     </p>
//   );
// });

// // export default class App extends Component {
// //   state = {
// //     count: 0,
// //     persons: [
// //       { id: 1, name: "ranja", age: 29 },
// //       { id: 2, name: "Ginja", age: 39 },
// //     ],
// //     text: "",
// //   };
// //   // componentDidMount() {
// //   //   setInterval(() => {
// //   //     this.setState({ count: this.state.count + 1 });
// //   //   }, 1000);
// //   // }

// //   // static getDerivedStateFromProps(nextProps, prevProps) {
// //   //   console.log("Foo getDerivedStateFromProps", nextProps, prevProps);
// //   //   return {};
// //   // }

// //   render() {
// //     const { count, persons, text } = this.state;
// //     return (
// //       <div>
// //         <input type='text' value={text} onChange={this._change} />
// //         <ul>
// //           {persons.map((person) => {
// //             return (
// //               <Person
// //                 {...person}
// //                 key={person.id}
// //                 onClick={this.toPersonClick}
// //               />
// //             );
// //           })}
// //         </ul>
// //       </div>
// //     );
// //   }

// //   _change = (e) => this.setState({ ...this.state, text: e.target.value });

// //   toPersonClick = () => {};
// // }

// function App() {
//   const [state, setState] = useState({
//     text: "",
//     persons: [
//       { id: 1, name: "ranja", age: 29 },
//       { id: 2, name: "Ginja", age: 39 },
//     ],
//   });

//   const toPersonClick = useCallback(() => {}, []);

//   return (
//     <div>
//       <input type='text' value={state.text} onChange={_change} />
//       <ul>
//         {state.persons.map((person) => {
//           return <Person {...person} key={person.id} onClick={toPersonClick} />;
//         })}
//       </ul>
//     </div>
//   );

//   function _change(e) {
//     setState({ ...state, text: e.target.value });
//   }

//   // function toPersonClick() {}
// }
// function App() {
//   const [visible, setVisible] = useState(false);
//   const open = () => {
//     setVisible(true);
//   };

//   const close = () => {
//     setVisible(false);
//   };

//   return (
//     <div>
//       <button onClick={open}>Open</button>
//       {visible && (
//         <Modal>
//           <div
//             style={{
//               width: "100vw",
//               height: "100vh",
//               background: "rgba(0,0,0,0.5)",
//             }}
//             onClick={close}
//           >
//             HELLLO
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }

function App() {
  const myInputRef = useRef();

  const click = () => {
    console.log(myInputRef.current.value);
  };

  return (
    <div>
      <MyInput ref={myInputRef} />
      <button onClick={click}>send</button>
    </div>
  );
}

export default App;
