import React from "react";
import { Link } from "react-router-dom"

function Decision ({user}) {



    return (
        <main className="decision-wrapper">
            <h2 className="user-name">Welcome: {user}</h2>
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
        </main>
    )
}

export default Decision;