import React from "react";
import { Link } from "react-router-dom"
import hogwartsPic from "../../images/homepage-background.jpg";

function Decision ({user}) {



    return (
        <main className="decision-wrapper">
            <img src={hogwartsPic} alt="" className="homepage-img" />
            <h2 className="user-name">Welcome: {user}</h2>
                <section className="dlink-wrapper">
                    <Link className="d-link" to="/display" >
                      <section className="spells-cont">
                            Learn Spells
                       </section>
                     </Link>
                     <Link className="d-link">
                      <section className="house-cont">
                          Discover Houses
                      </section>
                     </Link>
                </section>
        </main>
    )
}

export default Decision;