import React from 'react'
import { Link } from 'gatsby'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>2021 IFBA Convention</h1>
            </header>
            <div className="content">
                <p>Join us in Canada's National Capital Region<br/>
                from September 12 - 16, 2021</p>
                <ul className="actions">
                    <li><Link to="/registration" className="button next scrolly">Register Today</Link></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
