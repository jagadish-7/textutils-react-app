
import './App.css';
import PropTypes from 'prop-types'

import { Navbar } from "./myComponents/Navbar";
import { TextForm } from './myComponents/TextForm';
import About from './myComponents/About';
import Alert from './myComponents/Alert';
import React, { useState } from "react";

function App() {

  // let name = "Jaggi";
  // let num = 78/4;



  // For setting the darkmode
  const [mode, setMode] = useState('light');


  //For setting the alerts
  const [alert, setAlert] = useState(null);



  //Function to show the alerts

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }



  const togleDark = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor= '#121212';

      //Showing the alert
      showAlert("Dark mode has been enables", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }


  return (
    <>
   


<Navbar title = "Dgitools" aboutText = "About Us" switchMode = {mode} toggleDark = {togleDark}/>
<Alert alert = {alert} switchMode = {mode} />

<TextForm heading="Covert Lowercase to UPPERCASE" switchMode = {mode} showAlert = {showAlert}/>

<About/>
    
    </>
  );
}

export default App;




//component name first
Navbar.propTypes = {
    title: PropTypes.string,

}