import './App.css';
import { Route, Routes } from "react-router-dom"
import { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import Homepage from '../Pages/Homepage/Homepage'
import HogwartsPage from '../Pages/HogwartsPage/HogwartsPage';
import CommonRoom from '../Pages/CommonRoom/CommonRoom';

// import DisplayHub from '../DisplayHub/DisplayHub';
import DecisionPage from '../Pages/DecisionPage/decisionPage'
// import HouseHub from '../HouseHub/HouseHub';



function App() {
  
    const [personName, setPersonName] = useState('')

    const handleName = (name) => {
        setPersonName(name)
    }
 
  return (
      <>
          <Navbar/>
             <main className='App'>
                 <Routes>
                     <Route path="/" element={<Homepage/>} />
                     <Route path='/hogwarts' element={<HogwartsPage getUser={handleName}/>}/>
                     <Route path="/commons" element={<CommonRoom user={personName}/>} />
                     <Route path="/decision" element={<DecisionPage />} />
                     {/* <Route path="/houses" element={<HouseHub/>} /> */}
                     {/* <Route path="/" element={<Homepage />} /> */}
                 </Routes>

             </main>
    </>
  )
}

export default App;
