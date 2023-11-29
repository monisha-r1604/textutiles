
import React,{ useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';


function App() {

  const toggleMode = ()=>{
    debugger;
    if (mode === 'light'){
      console.log(mode)
      setMode('dark');
    document.body.style.backgroundColor='#042743'
    showAlert("Dark mode has been enabled","Success")
    document.title = "TextUtils - Dark Mode"

    }
  else  {
    console.log(mode)

    setMode('light')
    document.body.style.backgroundColor = "white"
    showAlert("Light mode has been enabled","Success")
    document.title = "TextUtils - light Mode"


  }
}
//alert is an object
const showAlert = (message, type)=>{
  setAlert({
    msg:message,
    type:type
  })

}

  const[mode, setMode]=useState('light');// weather dar mode is enabled or not
  const[alert,setAlert]=useState(null)
  return (
    <>
<Navbar mode={mode} toggleMode={toggleMode} ></Navbar>
<Alert alert={alert}></Alert>

<div className='container my-3'>
 
{/* use exact keyword inorder to match things exaactly* */}
     <About />
          
  <TextForm heading ="Enter your a text to analyze" mode={mode}/>
           
        </div>



   </>
  );
}

export default App;
