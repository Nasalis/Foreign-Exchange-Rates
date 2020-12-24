import React from 'react'

import './fotter.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <footer className="footer">
            <div className="contact">
                    <h2>Approaching the market</h2>
                    <h3>Contacts</h3>
                    <ul>
                        <li><GitHubIcon/></li>
                        <li><FacebookIcon/></li>
                        <li><InstagramIcon/></li>
                    </ul>
            </div>

            <div className="infoProject">
                <div className="infoBlock">
                    <h3>Images</h3>
                    <ul>
                        <li>Photo One:<span> Photo by <a href="https://unsplash.com/@bartos?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Aidan Bartos</a> on <a href="https://unsplash.com/s/photos/money?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></li>
                        <li>Photo Two:<span> Photo by <a href="https://unsplash.com/@hamxabaig?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Hamza Baig</a> on <a href="https://unsplash.com/s/photos/coin?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></li>
                    </ul>
                </div>

                <div className="infoBlock">
                    <h3>API & Libray</h3>
                    <ul>
                        <li>API:<span><a href="https://exchangeratesapi.io/"> Foreign exchange rates</a> </span></li>
                        <li>Libray:<span><a href="https://www.chartjs.org/"> Chart.js</a> </span></li>
                    </ul>
                </div>
            </div>

            
        </footer>
    )
}

export default Footer
