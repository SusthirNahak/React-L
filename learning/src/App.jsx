import React,{ useState } from 'react'
import { Navbar } from './components/Navbar'
import TextArea from './components/TextArea'
import About from './components/About'


function App() {
  const[mode,setMode] =useState('light');

  const togglemode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }

  return (
    <>
      <Navbar  mode={mode} togglemode={togglemode} />
      <div className="container my-4 ">
      <About/>
      <TextArea heading="Enter text to analyze" togglemode={togglemode}/>
      </div>
      
    </>
  )
}

export default App
