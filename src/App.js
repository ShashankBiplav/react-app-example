import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Shashank', age: 23 },
      { name: 'Biplav', age: 23 },
    ],
  };

  switchNameHandler = (newName) => {
    // console.log('Was Clicked');
    this.setState({
      persons: [
        { name: newName, age: 2 },
        { name: 'B', age: 22 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={()=> this.switchNameHandler('SHANKY')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click = {this.switchNameHandler.bind(this, 'SHANK!!!!')} //passed method to props
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
      </div>
    );
  }
}

export default App;
