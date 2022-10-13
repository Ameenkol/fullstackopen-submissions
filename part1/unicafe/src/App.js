import { useState } from 'react';

const Button = (props) => (
  <button onClick={props.onClick} style={props.style}>{props.text}</button>
)

const StatisticLine = ({value, text}) => (
  <h3> {text} {value}</h3>
)

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  return (
  <div>
    <StatisticLine text='good' value={props.good} />
    <StatisticLine text='neutral' value={props.neutral} />
    
    <StatisticLine text='bad' value={props.bad} />
    <StatisticLine text='all' value={sum} />
    
    <StatisticLine text='average' value={sum/3} />
    <StatisticLine text='positive' value={ props.good * 100 / sum + '%'}/>
    
    </div>
  )}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className="App">
      <h1>give feedback</h1>

      <Button style={{marginRight: "1rem"}} onClick={() => setGood(good + 1)} text='good' />

      <Button style={{marginRight: "1rem"}} onClick={() => setNeutral(neutral + 1)} text='neutral' />

      <Button onClick={() => setBad(bad + 1)} text='bad' />
      

      <h2>Statistics </h2>
      {!(good || bad || neutral) ? <h4>No feedback given</h4> :
        <>    
          <Statistics good={good} bad={bad} neutral={neutral} />
        </>
      }
    </div>
  );
}

export default App;
