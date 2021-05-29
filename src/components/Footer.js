import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <div className="contact-method">
                <span className="icon alt fa-envelope"></span>
                <h3>Email</h3>
                <OutboundLink href="mailto:2021ifba@gmail.com">2021ifba@gmail.com</OutboundLink>
            </div>
            <div className="contact-method">
                <span className="icon alt fa-home"></span>
                <h3>Convention Hotel</h3>
                <span>HOMEWOOD SUITES by HILTON OTTAWA DOWNTOWN<br />
                361 Queen St<br />
                Ottawa, ON<br/>
                K1R 0C7<br/>
                (613) 234-6363</span>
            </div>
            <ul className="icons">
                <li><OutboundLink href="https://twitter.com/intfirebuff" className="icon alt fa-twitter"><span className="label">Twitter</span></OutboundLink></li>
                <li><OutboundLink href="https://facebook.com/intfirebuff" className="icon alt fa-facebook"><span className="label">Facebook</span></OutboundLink></li>
                <li><OutboundLink href="https://facebook.com/groups/firebuffing" className="icon alt fa-users"><span className="label">Buffing Community</span></OutboundLink></li>
                <li><OutboundLink href="https://instagram.com/intfirebuff" className="icon alt fa-instagram"><span className="label">Instagram</span></OutboundLink></li>
                <li><OutboundLink href="https://ifba.org" className="icon alt fa-external-link"><span className="label">Website</span></OutboundLink></li>
            </ul>
            <ul className="copyright">
                <li>&copy; 2021 Int'l Fire Buff Associates</li>
            </ul>
        </div>
    </footer>
)

export default Footer
