import React, { useEffect } from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {

    useEffect(() => {
        console.log('[useEffect] cockpit');

        //making http request
        setTimeout(() => {
            alert('Data Saved to Cloud');
        }, 1000);
        return () => {
            console.log('[Cleanup Work] cockpit');
        }
    }, [props.personsLength]);

    let assignedClasses = [];
    let btnClasses = [];

    btnClasses.push(classes.Button);
    if (props.showPersons) {
        btnClasses.push(classes.Green);
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.Red)
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.Bold)
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <h2 className={assignedClasses.join(' ')}> This is a Person Component </h2>
            <button className={btnClasses.join(' ')} onClick={props.togglePersonHandler}> Toggle Person </button>
        </div>
    );
};

export default React.memo(cockpit);