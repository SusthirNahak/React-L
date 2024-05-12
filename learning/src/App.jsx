import React,{ useState } from 'react'
import { Navbar } from './components/Navbar'
import TextArea from './components/TextArea'
import About from './components/About'

//import react router dom
import{
  BrowserRoute as Router,
  Switch,
  Route,
  Link } from "react-router-dom"

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
<Router>

      <Navbar  mode={mode} togglemode={togglemode} />
      <div className="container my-4 ">
          <Switch>
            <Route path='/about'>
            <About/>
            </Route>
            <Route path='/'>
            <TextArea heading="Enter text to analyze" togglemode={togglemode}/>
            </Route>
          </Switch>
      </div>
      
      </Router>
    </>
  )
}

export default App
