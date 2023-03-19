import './App.css';
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import cleanSpells from '../../util/cleaning';
import Homepage from '../Homepage/Homepage.js'
import Display from '../Display/Display';
import DecisionPage from "../DecisionPage/decisionPage";



function App() {
  
    const [personName, setPersonName] = useState('')

    const handleName = (name) => {
        setPersonName(name)
    }
 
  return (
      <>
          <Header />
             <main className='App'>
                 <Routes>
                     <Route path="/" element={<Homepage handleName={handleName}/>} />
                     <Route path="/display" element={<Display />} />
                     <Route path="/decision" element={<DecisionPage user={personName} />} />
                     {/* <Route path="/" element={<Homepage />} /> */}
                     {/* <Route path="/" element={<Homepage />} /> */}
                 </Routes>

             </main>
    </>
  )
}

export default App;
