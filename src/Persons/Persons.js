import React, { Component } from 'react';
import Person from '../Person/Person'

class Persons extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps', props);
        return state;
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot' }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate', snapshot);
    };

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    };

    render() {
        console.log('[Persons.js] render');
        return (
            <div>
                {
                    this.props.persons.map((person, index) => {
                        return <Person key={person.id} name={person.name} age={person.age}
                            deletePersonHandler={() => this.props.deletePersonHandler(index)}
                            nameChangeHandler={(event) => this.props.nameChangeHandler(event, person.id)} />
                    })
                }
            </div>
        );
    };

};


export default Persons;