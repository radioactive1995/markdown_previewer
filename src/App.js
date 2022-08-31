import './App.css';
import Editor from './Editor'
import Previewer from './Previewer';
import React, { useState } from 'react';

function App() {
  const [markDown, setMarkDown] = useState('# Header \n\n## Sub-Header \n\n'
  + '[google](www.google.com) \n\n'
  + '`<p>Tester ut om det fungerer.</p>` \n\n'
  + '```\n function sum(num1, num2) \n { return sum1 + sum2 } \n``` \n\n'
  + '1. item1 \n1. item2 \n1. item3 \n1. item4 \n\n'
  + '* item1 \n* item2 \n* item3 \n\n'
  + '> This is a quote \n\n'
  + '**Bold text** \n\n'
  + '*Italic text* \n\n'
  + '![freecodecamp logo](https://cdn.icon-icons.com/icons2/2631/PNG/512/google_chrome_new_logo_icon_159144.png "this is a picture")'
  )


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
