import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import metaImg from '../assets/images/meta-img.jpg'

const title = 'Schedule - 2021 IFBA Convention';
const description = "See the exciting activites planned for the 2021 IFBA Convention. Hosted in Ottawa-Gatineau from September 12 - 16, 2021";
const twitterAuthor = '@intfirebuff';
const image = `https://convention.ifba.org${metaImg}`;

const Schedule = (props) => (
    <Layout>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:url" content="https://convention.ifba.org/schedule" />
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
                        <h1>Convention Schedule</h1>
                    </header>
                    <p>*** SUBJECT TO CHANGE ***</p>
                    <table>
                        <thead>
                            <tr>
                                <th>SUNDAY SEPTEMBER 12</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Arrival</td>
                                <td>Registration</td>
                            </tr>
                            <tr>
                                <td>18:00 - 21:00</td>
                                <td>IFBA Executive Board Meeting</td>
                            </tr>
                            <tr>
                                <td>18:00 - 23:00</td>
                                <td>Hospitality room</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>MONDAY SEPTEMBER 13</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>07:00</td>
                                <td>Breakfast at hotel</td>
                            </tr>
                            <tr>
                                <td>09:00</td>
                                <td>Opening ceremonies</td>
                            </tr>
                            <tr>
                                <td>10:15 - 11:45</td>
                                <td>IFBA Annual Business Meeting</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    Lunch on your own<br/>
                                    Free afternoon to explore<br/>
                                    Dinner on your own
                                </td>
                            </tr>
                            <tr>
                                <td>18:00 - 23:00</td>
                                <td>Hospitality room</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>TUESDAY SEPTEMBER 14</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>07:00</td>
                                <td>Breakfast at hotel</td>
                            </tr>
                            <tr>
                                <td>08:30</td>
                                <td>
                                    Board buses for Ottawa Fire Training Centre<br/>
                                    898 Industrial Avenue
                                </td>
                            </tr>
                            <tr>
                                <td>09:00</td>
                                <td>Ottawa Fire apparatus display</td>
                            </tr>
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td>Lunch at Training Centre</td>
                            </tr>
                            <tr>
                                <td>15:00</td>
                                <td>Board buses for return to hotel</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    Dinner on your own
                                </td>
                            </tr>
                            <tr>
                                <td>18:00 - 23:00</td>
                                <td>Hospitality room</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>WEDNESDAY SEPTEMBER 15</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>07:00</td>
                                <td>Breakfast at hotel</td>
                            </tr>
                            <tr>
                                <td>08:30</td>
                                <td>
                                    Board buses for Gatineau
                                </td>
                            </tr>
                            <tr>
                                <td>09:00</td>
                                <td>Service Incendie de Gatineau apparatus display</td>
                            </tr>
                            <tr>
                                <td>11:00</td>
                                <td>Buses leave for Gatineau Caserne 8</td>
                            </tr>
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td>Lunch at Gatineau Caserne 8</td>
                            </tr>
                            <tr>
                                <td>15:00</td>
                                <td>Board buses for return to hotel</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    Dinner on your own
                                </td>
                            </tr>
                            <tr>
                                <td>18:00 - 23:00</td>
                                <td>Hospitality room</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>THURSDAY SEPTEMBER 16</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>07:00</td>
                                <td>Breakfast at hotel</td>
                            </tr>
                            <tr>
                                <td>08:30</td>
                                <td>
                                    Board buses for Bytown Fire Brigade Museum<br/>
                                    2880 Sheffield Road
                                </td>
                            </tr>
                            <tr>
                                <td>10:00</td>
                                <td>
                                    Board buses for Canadian Fallen Firefighter<br/>
                                    Memorial and Canadian War Museum
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    Lunch on your own at War Museum
                                </td>
                            </tr>
                            <tr>
                                <td>15:00</td>
                                <td>Buses leave for hotel</td>
                            </tr>
                            <tr>
                                <td>18:00</td>
                                <td>Cocktail reception</td>
                            </tr>
                            <tr>
                                <td>19:00</td>
                                <td>Banquet</td>
                            </tr>
                            <tr>
                                <td>22:00 - 23:00</td>
                                <td>Hospitality room</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>

    </Layout>
)

export default Schedule