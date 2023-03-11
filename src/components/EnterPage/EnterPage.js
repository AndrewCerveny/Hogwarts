import React from "react";
import { useState } from "react";
import './EnterPage.css'


function EnterPage() {
  const [userName, setUserName] = useState('')

  return(
    <section className="welcome-area">
      <h2> I </h2>
      <input
      name='userName'
      placeholder="Name here"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}      
      />
    <p> Solemnly swear that I am up to no good </p>
    <button>Enter</button>
    </section>
  )
}
export default EnterPage; 