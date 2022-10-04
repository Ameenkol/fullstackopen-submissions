const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => { 
  return (
    <>
      {props.part1.name} {props.part1.exercises}
      <br />

      {props.part2.name} {props.part2.exercises}
      <br />

      {props.part3.name} {props.part3.exercises}
    </>
  )
}

const Total = (props) => {
  return (
    <p>
      Nummber of total courses taken is {props.exercise1 + props.exercise2 + props.exercise3}
    </p>
  )
}

function App() {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (

    <div className="App">
      <Header course={course} />

      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
      
      <Total exercise1={parts[0].exercises} exercise2={parts[1].exercises} exercise3={parts[2].exercises} />
    </div>
  );
}

export default App;