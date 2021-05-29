import React from 'react'
import Helmet from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Layout from '../components/layout'

import pic20 from '../assets/images/pic20.jpg'

const Registration = (props) => (
    <Layout>
        <Helmet>
            <title>Registration - 2021 IFBA Convention</title>
            <meta name="description" content="Registration" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Registration</h1>
                    </header>
                    <h3>Pricing</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Full registration prior to August 1, 2021</td>
                                <td>CAD$325.00</td>
                            </tr>
                            <tr>
                                <td>Full registration after August 1, 2021</td>
                                <td>CAD$350.00</td>
                            </tr>
                            <tr>
                                <td>Banquet only</td>
                                <td>CAD$100.00</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Registration form</h3>
                    <OutboundLink href="https://assets.ifba.org/documents/IFBA+2021+Ottawa+Registration+Form+(NF).pdf">
                        Download PDF here (269 KB)
                        <br/>
                        <img src={pic20} alt="" />
                    </OutboundLink>
                    
                    <br/>
                    <br/>

                    <h3>Payment methods</h3>
                    <p>Please email Rene Bougie prior to submitting payment: <OutboundLink href="mailto:2021ifba@gmail.com">2021ifba@gmail.com</OutboundLink></p>
                    <h4>Post</h4>
                    <p>
                        International Money Orders in Canadian dollars can be mailed to:
                        <br/>
                        <br/>
                        IFBA 2021 CONVENTION<br/>
                        7-45 chemin Haendel<br/>
                        Candiac, Quebec J5R 1R7<br/>
                        Canada
                    </p>
                    <h4>Electronic</h4>
                    <p><OutboundLink href="https://paypal.me/ifbaottawa">PayPal.me/ifbaottawa</OutboundLink></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Registration