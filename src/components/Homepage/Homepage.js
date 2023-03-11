import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import SpellCard from "../SpellCard/SpellCard";
import "../App/App"
import hogwartsPic from  "../../images/homepage-background.jpg"

//                                           ISSUES:
// "intro-wrapper Input" contains placeholder email which messed with UI upon loading... need to eliminate issue
// "homepage-submit" has purple underline that needs to be taken away

function Homepage({handleName}) {
    const [userName, setUserName] = useState('')

    return(
        <section className="welcome-area">
            <img src={hogwartsPic} alt="" className="homepage-img" />
            <section className="intro-wrapper">
                 <h2> I </h2>
                 <input
                     name='userName'
                     placeholder="Name here"
                     value={userName}
                     onChange={(e) => setUserName(e.target.value)}
                 />
                 <p> Solemnly swear that I am up to no good </p>
                 <Link to="/decision">
                     <div className="homepage-submit" onClick={() => handleName(userName)}>
                         Enter
                     </div>
                 </Link>
             </section>
        </section>
    )
}
export default Homepage;