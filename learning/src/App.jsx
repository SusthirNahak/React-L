import { useState } from 'react'
import { Navbar } from './components/Navbar'
import TextArea from './components/TextArea'
import About from './components/About'


function App() {
  

  return (
    <>
      <Navbar/>
      <div className="container my-4 ">
      <About/>
      <TextArea heading="Enter text to analyze" />
      </div>
      
    </>
  )
}

export default App
