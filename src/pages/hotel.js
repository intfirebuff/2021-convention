import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic12 from '../assets/images/pic12.jpg'
import pic13 from '../assets/images/pic13.jpg'
import pic14 from '../assets/images/pic14.jpg'
import pic15 from '../assets/images/pic15.jpg'
import pic16 from '../assets/images/pic16.jpg'
import pic17 from '../assets/images/pic17.jpg'

const Hotel = (props) => (
    <Layout>
        <Helmet>
            <title>Hotel - 2021 IFBA Convention</title>
            <meta name="description" content="Hotel" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Convention Hotel</h1>
                    </header>
                    <h3>Homewood Suites by Hilton Ottawa Downtown</h3>
                    <div class="box alt">
                        <div class="grid-wrapper">
                            <div class="col-4">
                                <span class="image fit">
                                    <a href={pic13}><img src={pic13} alt=""/></a>
                                </span>
                            </div>
                            <div class="col-4">
                                <span class="image fit">
                                    <a href={pic12}><img src={pic12} alt=""/></a>
                                </span>
                            </div>
                            <div class="col-4">
                                <span class="image fit">
                                    <a href={pic14}><img src={pic14} alt=""/></a>
                                </span>
                            </div>
                            <div class="col-4">
                                <span class="image fit">
                                    <a href={pic15}><img src={pic15} alt=""/></a>
                                </span>
                            </div>
                            <div class="col-4">
                                <span class="image fit">
                                    <a href={pic17}><img src={pic17} alt=""/></a>
                                </span>
                            </div>
                            <div class="col-4">
                                <span class="image fit">
                                    <a href={pic16}><img src={pic16} alt=""/></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <p>The Homewood Suites by Hilton Ottawa Downtown is our convention hotel and is located at 361 Queen Street, Ottawa, ON, K1R 0C7.</p>
                    <p>The room rate of CAD$169 per night is available from September 10 - 19. Rooms are spacious and include a king bed, full kitchen, living room with pull-out sofa, 50" TV, and complimentary wifi. Breakfast is included.</p>
                    <p>Book your room now by calling the hotel at (613) 234-6363 and providing the group code "IFBA Conference".</p>
                    <p>Ground transportation options for airport arrivals will be announced at a later date. The average cost to take a taxi from YOW to downtown is CAD$37.00.</p>
                    <section>
                        <h3>Parking</h3>
                        <ul>
                            <li>CAD$25/day with in and out privileges</li>
                            <li>CAD$30/day for trucks/SUVs (offsite)</li>
                            <li>Garage clearance 5'9"</li>
                        </ul>
                    <h3>Hotel Website</h3>
                    <a href="https://www.hilton.com/en/hotels/yowqshw-homewood-suites-ottawa-downtown/">https://www.hilton.com/en/hotels/yowqshw-homewood-suites-ottawa-downtown/</a>
                    </section>

                    <br/>
                    <br/>

                    <iframe
                        title="google map of hotel location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.545208323282!2d-75.70827728418155!3d45.418509844511505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050dd729e369%3A0xbbf3deecf93115f!2sHomewood%20Suites%20by%20Hilton%20Ottawa%20Downtown!5e0!3m2!1sen!2sca!4v1621895487046!5m2!1sen!2sca"
                        width="600"
                        height="450"
                        style={{border:0}}
                        allowfullscreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </section>
        </div>

    </Layout>
)

export default Hotel