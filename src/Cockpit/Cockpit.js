import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {

    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[useEffect] cockpit');

        toggleBtnRef.current.click();
        
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
            <h1>{ props.title }</h1>
            <h2 className={ assignedClasses.join(' ') }> This is a Person Component </h2>
            <button className={ btnClasses.join(' ') } onClick={ props.togglePersonHandler } 
            ref={ toggleBtnRef } > Toggle Person </button>
        </div>
    );
};

export default React.memo(cockpit);