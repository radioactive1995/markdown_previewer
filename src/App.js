import './App.css';
import Editor from './Editor'
import Previewer from './Previewer';
import React, { useState } from 'react';

function App() {
  const [markDown, setMarkDown] = useState('');

  const inputHandler = (event) => {
    console.log(event.target.value)
    setMarkDown(event.target.value)
  } 

  return (
    <div className="App">
      <Editor markDown={markDown} inputHandler={inputHandler}></Editor>
      <Previewer markDown={markDown}></Previewer>
    </div>
  );
}

export default App;
