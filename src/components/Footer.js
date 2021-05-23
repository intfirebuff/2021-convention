import React from 'react'

const date = new Date();
const year = date.getFullYear();

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://twitter.com/intfirebuff" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://facebook.com/intfirebuff" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://instagram.com/intfirebuff" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://ifba.org" className="icon alt fa-external-link"><span className="label">Website</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; {year} Int'l Fire Buff Associates</li>
            </ul>
        </div>
    </footer>
)

export default Footer
