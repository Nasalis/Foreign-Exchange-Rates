import React, { useState } from 'react'

import './accordion.css'

function Accordion({nameChart, description, className, name, site}) {

    const [active, setActive] = useState(false);

    function accordionActive() {
       setActive(!active);
    }

    return (
        <div className="accordion">
            <div className={!active ? className : name} onClick={accordionActive}>
                <div className="label">{nameChart}</div>
                <div className="contentinfo">
                    <p>According the site {site}:</p>
                    <blockquote>"{description}"</blockquote>
                    <a href="">See more here!</a>
                    <a href="">Look our charts here!</a>
                </div>
            </div>
        </div>
    )
}

export default Accordion
