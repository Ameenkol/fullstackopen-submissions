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
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text='good' /></td>
            <td><StatisticLine value={props.good} /></td>  
          </tr>

          <tr>
            <td><StatisticLine text='neutral' /></td>
            <td><StatisticLine value={props.neutral} /></td>
          </tr>

          <tr>
            <td><StatisticLine text='bad' /></td>
            <td><StatisticLine value={props.bad} /></td>
          </tr>

          <tr>
            <td><StatisticLine text='all' /></td>
            <td><StatisticLine value={sum} /></td>
          </tr>

          <tr>
            <td><StatisticLine text='average' /></td>
            <td><StatisticLine value={sum/3} /></td>
          </tr>

          <tr>
            <td><StatisticLine text='positive' /></td>
            <td><StatisticLine value={props.good * 100 / sum + '%'} /></td>
          </tr> 
        </tbody>
      </table>
    
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
