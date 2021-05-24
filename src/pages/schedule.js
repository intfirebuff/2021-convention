import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Schedule = (props) => (
    <Layout>
        <Helmet>
            <title>Schedule - 2021 IFBA Convention</title>
            <meta name="description" content="Schedule" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Schedule</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
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
                                <td>Hospitality Room</td>
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
                                <td>Opening Ceremonies</td>
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
                                <td>Hospitality Room</td>
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
                                    Board buses for Ottawa Fire Training Center<br/>
                                    898 Industrial Avenue
                                </td>
                            </tr>
                            <tr>
                                <td>09:00</td>
                                <td>Ottawa Fire Apparatus Display</td>
                            </tr>
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td>Lunch at the Training Center</td>
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
                                <td>Hospitality Room</td>
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
                                <td>Service Incendie de Gatineau Apparatus Display</td>
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
                                <td>Hospitality Room</td>
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
                                    Board Buses for Canadian Fallen Firefighter<br/>
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
                                <td>Buses leave for Hotel</td>
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
                                <td>Hospitality Room</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>

    </Layout>
)

export default Schedule