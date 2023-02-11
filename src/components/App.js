  import React, { useState, useTransition } from "react";
 import About from "./About";
import Alert from "./Alert";
import Navbar from "./Navbar";
import Textform from "./Textform";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//to deploy follow https://blog.logrocket.com/deploying-react-apps-github-pages/
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  function modeF() {
    setDarkMode(!darkMode);
  }
  function buttons(t, m) {
    setAlert({
      type: t,
      message: m,
    });
    setTimeout(() => setAlert({}), 2200);
  }
  return (
    <div>
  <BrowserRouter> {/* this should enclose everything */}
      <Navbar mode={darkMode} changeMode={modeF} buttons={buttons} />
      <div className="container">
         <Alert type={alert.type} message={alert.message} />
          <Routes>  {/*this should enclose everything which is going to change */}
             <Route exact path="/about" element={<About  moded={darkMode}/>} />  
             <Route exact path="/" element={<Textform mode={darkMode} utils={buttons} />} />  
          </Routes>
          </div>
        </BrowserRouter>
      
    </div>
  );
}
export default App;
