import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';

function App() {
  return (
    <div className="App">
      <CommentBox />
      <DigitalClock />
      <LikesButton />
      <NameCard name="kangting" number={1234567890} ishuman tags={['善良','大方']}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hahaha</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
