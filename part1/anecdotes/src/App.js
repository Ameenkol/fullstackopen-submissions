import { useState } from 'react'

const Button = (props) => {
  return (
    <button style={props.style} onClick={props.onClick}>{props.text}</button>
    )
}
  
const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
]


const App = () => {
  const [selected, setSelected] = useState(0);

  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  // '0'.repeat(anecdotes.length).split('').map(parseFloat);
  const copy = {...points}
  const [vote, setVote] = useState(copy);


  const voteAnecdote = () => {
    setVote({...vote, [selected]: vote[selected] += 1})
  }

  const genRandAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }
  
  return (
    <div>
      {anecdotes[selected]}
      <br />
      <p>has {vote[selected]} votes</p>
      
      <Button style={{ marginRight: '1rem' }} onClick={voteAnecdote} text='Vote' />
      
      <Button onClick={genRandAnecdote} text='Next Anecdote'/>
    </div>
  )
}

export default App
