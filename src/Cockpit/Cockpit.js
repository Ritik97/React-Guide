import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../context/auth-context';


const cockpit = (props) => {

    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[useEffect] cockpit');

        //toggleBtnRef.current.click();

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
            <button className={btnClasses.join(' ')} onClick={props.togglePersonHandler}
                ref={toggleBtnRef} > Toggle Person </button>
            <AuthContext.Consumer>
                {(context) => context.authenticated ?
                    <button className={classes.Button} onClick={context.login}>Logout</button> :
                    <button className={classes.Button} onClick={context.login}>Login</button>}
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);