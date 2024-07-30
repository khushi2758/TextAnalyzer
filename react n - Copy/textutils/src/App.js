import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
//import About from './components/About';
/*import {
  BrowserRouter as Router,
  Routes, 
  Route,
 //Link
} from "react-router-dom";*/
function App() {
const [mode,setMode]= useState('light');// wheather dark mode is eneble or not
const [alert,setAlert]= useState(null);
const showAlert = (message,type) =>{
  setAlert({
    msg : message,
    type:type
  })
  // to invisible the alert after 2 sec---------------->>
setTimeout(() =>{
setAlert(null)
},3000);
}
const toggleMode = ()=> {
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been eneble","success")
document.title = " TextAnalyzer-darkmode";

//-------------------------------------for adds(but it is not a good user experience)-------------------------------------->>
/*setInterval(()=>{
  document.title= "TextUtile is a amasing mode"
},2000);
setInterval(()=>{
  document.title= "install TextUtile now !!!"
},1500);*/
//----------------------------------------------------------------------------------------->
  }else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been eneble","success")
    document.title = " TextAnalyzer-lightmode";
  }
}
  return (
   <>
  {/*<Router>*/}
    <Navbar title = "TextAnalyzer" mode ={mode}  toggleMode ={toggleMode}/>
    <Alert alert= {alert}/>
<div className="container my-3">
{/*<Routes>*/}
          {/*<Route path="/about">
            <About />
          </Route>
          <Route path="/">*/}
        <Textform showAlert={showAlert} heading="Try TextAnalyzer - Word Counter, Charecter Counter, Remove extra Spaces" mode ={mode}/>
         {/* </Route>*/}

  {/*</Routes>*/}
</div>
  {/*</Router>*/}
{/*showAlert={showAlert} ----->>   for all button alert--------------------*/}
</>
  );
}

export default App;
