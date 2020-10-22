import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {
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
            <h1>I am a React App</h1>
            <h2 className={assignedClasses.join(' ')}> This is a Person Component </h2>
            <button className={btnClasses.join(' ')} onClick={props.togglePersonHandler}> Toggle Person </button>
        </div>
    );
};

export default cockpit;