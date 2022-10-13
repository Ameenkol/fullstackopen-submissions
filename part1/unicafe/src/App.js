import { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className="App">
      <h1>give feedback</h1>

      <button style={{marginRight: "1rem"}} onClick={() => setGood(good + 1)}>good</button>
      <button style={{marginRight: "1rem"}} onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h2>Statistics </h2>
      
      <h3>good { good }</h3>

      <h3>neutral { neutral }</h3>

      <h3>bad { bad }</h3>

    </div>
  );
}

export default App;
