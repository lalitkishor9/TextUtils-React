import { useState } from "react";
import "./App.css";
import TextForm from "./components/TextForms";
import Navbar from "./components/NavBar";
import Alert from "./components/Alert";
// import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [style, myStyle] = useState({color: "black",
  // backgroundColor: "white"});

  

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = `TextUtils -Home`;
      // myStyle({color: "black",
      // backgroundColor: "white"});
    } else {
      // myStyle({
      //   color: "white",
      //   backgroundColor: "black"
      // });
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = `TextUtils -Dark Mode`;
    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes> */}
        <TextForm showAlert={showAlert} mode={mode} />
          {/* <Route exact path="/about" element={<About myStyle={style}/>}> */}
          {/* </Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} />}> */}
          {/* </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
