import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic02 from '../assets/images/pic02.jpg'
import metaImg from '../assets/images/meta-img.jpg'

const title = 'Border Status - 2021 IFBA Convention';
const description = 'See the latest entry requirements for attending the 2021 IFBA Convention, September 12-16 in Ottawa-Gatineau';
const twitterAuthor = '@intfirebuff';
const image = `https://convention.ifba.org${metaImg}`;

const BorderStatus = (props) => (
    <Layout>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:url" content="https://convention.ifba.org/border" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterAuthor} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Border Status</h1>
                    </header>
                    <span className="image right"><img src={pic02} alt="" /></span>
                    {/* <h3>YOUR PASSPORT IS REQUIRED TO ENTER CANADA</h3> */}
                    <p>As of March 21, 2020, all foreign nationals are prohibiting from entering Canada for tourism, entertainment or leisure purposes. We will update this space with additional, relevant information once border restrictions are lifted.</p>
                    <p>Note: A valid passport is required to enter Canada.</p>
                    <br/>
                    <h3>Useful links</h3>
                    <p>
                        <strong>COVID-19: Travel, quarantine, and borders</strong><br/>
                        Find out if you can enter Canada<br/>
                        <a href="https://travel.gc.ca/travel-covid">https://travel.gc.ca/travel-covid</a>
                    </p>
                    <p>
                        <strong>Crossing the border to Canada</strong><br/>
                        What to expect on entry and how we screen travellers<br/>
                        <a href="https://travel.gc.ca/travel-covid/travel-restrictions/border">https://travel.gc.ca/travel-covid/travel-restrictions/border</a>
                    </p>
                    <p>
                        <strong>CDC Travel Notices</strong><br/>
                        Key Information for Travelers to Canada<br/>
                        <a href="https://wwwnc.cdc.gov/travel/notices/covid-4/coronavirus-canada">https://wwwnc.cdc.gov/travel/notices/covid-4/coronavirus-canada</a>
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default BorderStatus