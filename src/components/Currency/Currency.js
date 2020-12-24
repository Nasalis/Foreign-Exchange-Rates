import { useEffect, useState } from "react";
import React from 'react';

import './currency.css';
import coinsName from '../../assets/values'

import PublicIcon from '@material-ui/icons/Public';

import Chart from '../Chart/Chart'

function Currency() {

    const [coins, setCoins] = useState([])

    useEffect(() => {
        fetch('https://api.exchangeratesapi.io/latest?base=BRL')
        .then(response => response.json())
        .then(data => setCoins(data.rates))
    }, []);


    return (
        <div className="contentCurrency">
            <div className="contentList">
                <h2>
                    <PublicIcon style={{marginRight:'1rem'}} fontSize="large"/>
                    See the latest foreign exchange rates
                </h2>

                <div className="listContent">
                    {coinsName.map(name => (
                        <div className="list">
                            <h3 key={name}>{name}</h3>
                            <p key={coins[name]}>R$ {parseFloat(coins[name]).toFixed(3)}</p>
                        </div>
                    ))}
                </div>  
            </div>
            <Chart coins={coins}/>
        </div>
    )
}

export default Currency
