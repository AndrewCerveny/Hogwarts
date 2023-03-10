import logo from '../../images/logo.svg'
import './App.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Display from '../Display/Display';
import cleanSpells from '../../util/cleaning';




function App() {
  const [spells , setSpells] = useState([])
  const [error, setError] = useState('')
  
  
  const getSpells = async () => {
    const url = 'https://wizard-world-api.herokuapp.com/Spells'
    setError('')

    try {
      const response = await fetch(url)
      const spells = await response.json()
      const alteredSpells = cleanSpells(spells)
      setSpells(alteredSpells)
    }catch(error){
      setError(error.message)
    }
  }
  
  useEffect (() => {
    getSpells()
  },[])
  
  return (
    <main className='App'>
      <Header/>
      <Display spells={spells}/>
    </main>
    
  )
}

export default App;
