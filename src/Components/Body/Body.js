import React from 'react';
import Head from '../Head/Head';
import './Body.css'

const Body = () => {
    return (
        <div className='body'>
            <Head></Head>
            <div className='main-body'>
                <div className="exercises">
                    <h2>exercises here</h2>
                </div>

                <div className="count-exercise">
                    <h2>calculations here</h2>
                </div>
            </div>
        </div>
    );
};

export default Body;