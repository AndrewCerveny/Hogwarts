import React from "react";
import { Link } from "react-router-dom"
import './decisionPage.css'
import classRoom from '../../../images/hpClassRoom.jpg'


function Decision () {



    return (
        <main className="decision-area">
            <section className="decision-wrapper">
                <Link className="d-link" to="/display" >
                    <section className="spells-cont">
                        Learn Spells
                    </section>
                </Link>
                <Link className="d-link" to={'/houses'}>
                    <section className="house-cont">
                        Discover Houses
                    </section>
                </Link>
            </section>
        </main>
    )
}

export default Decision;