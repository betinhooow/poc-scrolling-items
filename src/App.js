import React from 'react';
import ScrollingComponent from './ScrollingComponent';

const items = [
  'R',
  'E',
  'A',
  'C',
  'T',
  '#',
  'J',
  'S'
]

function App() {
  return (
    <div>
      <ScrollingComponent 
        direction="vertical" 
        items={items}
        prevIcon={"up"}
        nextIcon={"down"}
      />
      <hr />
      <ScrollingComponent 
        direction="horizontal" 
        items={items}
      /> 
    </div>
  );
}

export default App;
