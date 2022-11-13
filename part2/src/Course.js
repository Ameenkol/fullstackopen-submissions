
export const Header = ({text}) => (
  <h1>
    {text}
  </h1>
)

export const Course = ({courses}) => {
  return (
    <>
      <div style={{display: "flex", flexDirection:"column"}}>
        {courses.map((course) => (
          <ul key={course.name}
            style={{ listStyle: "none", left: "1px", lineHeight:"normal" }}>
            <h2>{course.name}</h2>
            {course.parts.map((part) =>( 
              <li key={part.name}>
                {part.name}{ ' '}{part.exercises}
              </li>
            ))}
            {<h4>Total of {course.parts.reduce((init, curr) => {
                 return (init + curr.exercises);
                  }, 0)} exercises</h4>}
          </ul>
          ))}
      </div>

      
    </>
  )
}