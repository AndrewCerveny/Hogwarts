import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import SpellCard from "../SpellCard/SpellCard";
import "../App/App"

function Homepage({handleName}) {
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
            <Link to="/decision">
                <button onClick={() => handleName(userName)}>
                    Enter
                </button>
            </Link>
        </section>
    )
}
export default Homepage;