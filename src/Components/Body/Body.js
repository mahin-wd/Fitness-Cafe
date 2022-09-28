import React, { useEffect, useState } from 'react';
import Calculation from '../../Calculation/Calculation';
import Exercise from '../Exercise/Exercise';
import Head from '../Head/Head';
import './Body.css'

const Body = () => {
    const [exercises, setExercises] = useState([]);

    useEffect( () => {
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, [])

    return (
        <div className='body'>
            <Head></Head>
            <div className='main-body'>
                <div className="exercises">
                    {
                        exercises.map(exercise => <Exercise 
                                                        key={exercise.id}
                                                        exercise={exercise}
                                                        ></Exercise>)
                    }
                </div>

                <div className="count-exercise">
                    <Calculation></Calculation>
                </div>
            </div>
        </div>
    );
};

export default Body;