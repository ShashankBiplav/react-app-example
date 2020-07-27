import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I am a React App</h1>
      <Person name="Shashank" age="23"/>
      <Person name="Biplav" age="23"/>
    </div>
  );
}

export default App;
