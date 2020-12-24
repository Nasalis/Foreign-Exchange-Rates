import React from 'react';
import './main.css'

import content_initial from './images/content_inital.jpg';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';


function Main() {
    return (
        <main>

            <div className="contentShow">
                <div className="contentInitial">
                    <img src={content_initial}/>
                </div>
                <div className="banner">
                    <h1>Rates & Charts</h1>
                    <h3>See the foreign exchanges values for the past few days</h3>
                    <a>Saiba mais</a>
                </div>
            </div>

            <div className="info">
                <div className="info-details">
                    <h1>$</h1>
                    <h2>Analyze every each seconds currency quotes</h2>
                    <blockquote className="quote">
                        "Economics is not about tangible material things or objects; it deals with men, their apreciations and the actions that deribe from them".
                    </blockquote>
                    <p>Ludwig von Mises</p>
                </div>
            </div>

            <div className="cards-content">
                <div className="card">
                    <h1>See the currency</h1>
                    <div className="icon">
                        <AttachMoneyIcon fontSize='large'/>
                    </div>
                    <p>Discover new values each 30 seconds</p>
                    <footer>See now</footer>
                </div>

                <div className="card">
                    <h1>Watch the Chart</h1>
                    <div className="icon">
                        <ShowChartIcon fontSize='large'/>
                    </div>
                    <p>Discover new values each 30 seconds</p>
                    <footer>See now</footer>
                </div>

                <div className="card">
                    <h1>News of currency</h1>
                    <div className="icon-border"></div>
                        <div className="icon">
                            <LocalLibraryIcon fontSize='large'/>
                        </div>
                    <p>Discover new values each 30 seconds</p>
                    <footer>See now</footer>
                </div>
            </div>
        </main>
    )
}

export default Main;