
import './App.css';
import PropTypes from 'prop-types'

import { Navbar } from "./myComponents/Navbar";
import { TextForm } from './myComponents/TextForm';

function App() {

  // let name = "Jaggi";
  // let num = 78/4;
  return (
    <>
   


<Navbar title = "Props Text" aboutText = "About component"/>

<TextForm heading="Covert Lowercase to UPPERCASE"/>
    
    </>
  );
}

export default App;




//component name first
Navbar.propTypes = {
    title: PropTypes.string,

}