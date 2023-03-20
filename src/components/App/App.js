import './App.css';
import { Route, Routes } from "react-router-dom"
import { useState } from 'react';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage.js'
import DisplayHub from '../DisplayHub/DisplayHub';
import DecisionPage from "../DecisionPage/decisionPage";
import HouseHub from '../HouseHub/HouseHub';



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
                     <Route path="/display" element={<DisplayHub/>} />
                     <Route path="/decision" element={<DecisionPage user={personName} />} />
                     <Route path="/houses" element={<HouseHub/>} />
                     {/* <Route path="/" element={<Homepage />} /> */}
                 </Routes>

             </main>
    </>
  )
}

export default App;
