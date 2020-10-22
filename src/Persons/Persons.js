import React from 'react';
import Person from '../Person/Person'

const persons = (props) => {
    return (
        <div>
            {
                props.persons.map((person, index) => {
                    return <Person key={person.id} name={person.name} age={person.age}
                        deletePersonHandler={() => props.deletePersonHandler(index)}
                        nameChangeHandler={(event) => props.nameChangeHandler(event, person.id)} />
                })
            }
        </div>
    );
};


export default persons;