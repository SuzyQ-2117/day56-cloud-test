import React from 'react';
import './App.css';
import myImage from './images/my-image.jpg';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My 1st React App</h1>
        <Welcome />
      </header>
      <div className="image-wrapper">
        <img src={myImage} alt="Classroom" />
      </div>
    </div>
  );
}

export default App;