import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
//import About from './Components/About';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled","success")
    }
  }

  return (
    <>
    <NavBar title = "TextUtils" home = "Home" mode = {mode} toggleMode = {toggleMode} />
    <Alert alert = {alert} />
    <div className="container" my-5>
      <TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode = {mode} />
      </div>
    </> 
  );
} 


export default App;
