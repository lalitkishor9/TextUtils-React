import { useState } from "react";
import "./App.css";
import TextForm from "./components/TextForms";
import Navbar from "./components/NavBar";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode==="dark"){
    setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled" ,"success");
      document.title=`TextUtils -Home`;

    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled" ,"success");
      document.title=`TextUtils -Dark Mode`;
      
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <div className="container">
    <TextForm showAlert={showAlert} mode={mode}/>
      </div>
    </>
  );
}

export default App;
