
const Course = ({course}) => {
  return (
    <>
      <h1>{course.name}</h1>

      <ul style={{listStyle: "none"}}>
        {course.parts.map((part) => (
          <li key={part.id}>
          {part.name} {part.exercises}
          </li>
          ))}
      </ul>

      <h4>Total of {course.parts.reduce((init, curr) => {
        return (init + curr.exercises);
      }, 0)} exercises</h4>
    </>
  )
}

export default Course
