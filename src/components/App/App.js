import './App.css';
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import cleanSpells from '../../util/cleaning';
import Homepage from '../Homepage/Homepage.js'
import Display from '../Display/Display';
import DecisionPage from "../DecisionPage/decisionPage";



function App() {
  // const [spells , setSpells] = useState([])
  // const [error, setError] = useState('')

  //
  //
  // const getSpells = async () => {
  //   const url = 'https://wizard-world-api.herokuapp.com/Spells'
  //   setError('')
  //
  //   try {
  //     const response = await fetch(url)
  //     const spells = await response.json()
  //     const alteredSpells = cleanSpells(spells)
  //     setSpells(alteredSpells)
  //   }catch(error){
  //     setError(error.message)
  //   }
  // }
    const [personName, setPersonName] = useState('')

    const handleName = (name) => {
        console.log(name)
        setPersonName(name)
    }
  // useEffect (() => {
  //   getSpells()
  // },[])
  
  return (
      <>
          <Header />
             <main className='App'>
                 <Routes>
                     <Route path="/" element={<Homepage handleName={handleName}/>} />
                     <Route path="/display" element={<Display />} />
                     <Route path="/decision" element={<DecisionPage user={personName} />} />
                     <Route path="/" element={<Homepage />} />
                     <Route path="/" element={<Homepage />} />

                 </Routes>

             {/*<Display spells={spells}/>*/}
             </main>
    </>
  )
}

export default App;
