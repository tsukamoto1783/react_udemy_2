// import { useState, useCallback } from 'react';
// import './App.css';
// import { ChildArea } from './components/ChildArea';

// function App() {
//   console.log("App");
//   const [text, setText] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const onChangeText = (e) => {
//     setText(e.target.value);
//   };

//   const onClickOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   // 通常の関数定義
//   // const onClickClose = () =>
//   //   setIsOpen(false);

//   // useCallbackを使った関数定義
//   const onClickClose = useCallback(() =>
//     setIsOpen(false), [setIsOpen]);


//   return (
//     <div className="App">
//       <h1>React App</h1>
//       <input type="text" onChange={onChangeText} />
//       <br />
//       <br />
//       <button onClick={onClickOpen}>表示</button>
//       <ChildArea
//         isOpen={isOpen}
//         onClickClose={onClickClose}
//       />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";


export default function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <h1>React App</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Link to="/get-json">Get Json Page</Link>
      </div>
      <UserProvider >
        <Router />
      </UserProvider>
    </BrowserRouter>

  );
}
