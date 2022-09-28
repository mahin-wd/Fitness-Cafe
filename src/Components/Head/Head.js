import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

import './Head.css'

const Head = () => {
    return (
        <div>
            <div  className='web-name'>
                <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                <h1>Fitness Cafe</h1>
                </div>
            <h3>Start Getting Fit From Today</h3>
        </div>
    );
};

export default Head;