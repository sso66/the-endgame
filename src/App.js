import React, { useState, useMemo, useCallback } from 'react';
import './App.css';

import _ from 'lodash';

const Lodash = () => (_.join(['Another', 'component', 'loaded!', ' ', 'included in CRA by default!']));

function App() {
  const [name, setName ] = useState('Sun Stephen Oo');
  const [length, setLength] = useState(4);

  const handleChangeName = useCallback(event => setName(event.target.value), []);
  const handleChangeLength = useCallback(event => setLength(Number(event.target.value)), []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>The Endgame</h2>
        <div>
          <form>
            <input 
              value={name}
              onChange={handleChangeName}
            />
            <h3>React Hooks: Learn-Remember-Apply</h3>
            <NameDisplay name={name} />
            <br />
            <input 
              value={length}
              onChange={handleChangeLength}
            />
            <h3>Recursion and Backtracking Project</h3>
            <FibDisplay length={length} />
            <div><Lodash /></div>
          </form>

        </div>
      </header>
    </div>
  );
}

function NameDisplay({name}) { // DO!!!
// const NameDisplay = React.memo(function({name}) {  // DON'T???
  console.log("Re-rendering name...");
  return <p>Your name is <i>{name}</i></p>
}
// });

function FibDisplay({length}) {
  const numbers = useMemo(() => {
    console.log("Calculating numbers and re-rendering...");
    const result = [1, 1];
    for (let i = 2; i < length; i++) {
      result[i] = result[i - 1] + [i - 2]
    }
    return result;
  }, [length]);
  return (
    <section>
      <p>{length} numbers of the Fibonacci sequence: 
      &nbsp; {numbers.join(', ')}
      </p>
      <code>(Input length 0 or 1 have no side-effect in recursion)</code>
    </section>
  )
}

export default App;
