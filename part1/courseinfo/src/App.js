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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (

    <div className="App">
      <Header course={course} />

      <Content part1={part1} part2={part2} part3={ part3} />
      
      <Total exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises} />
    </div>
  );
}

export default App;