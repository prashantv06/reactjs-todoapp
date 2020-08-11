import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Learn React JS',
        completed: false
      },
      {
        id: 2,
        title: 'Develop projects using React JS',
        completed: true
      },
      {
        id: 3,
        title: 'Push on GitHub',
        completed: false
      }
    ]
  }


  render() {
    
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
