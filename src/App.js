import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Shashank', age: 23 },
      { name: 'Biplav', age: 23 }
    ],
  });

  const switchNameHandler= ()=>{
    // console.log('Was Clicked');
    setPersonsState({ persons: [
      { name: 'SB', age: 22 },
      { name: 'B', age: 22 },
    ]});
  }
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
        />
      </div>
    );
}

export default App;
