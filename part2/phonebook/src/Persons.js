import React from 'react'

const Persons = ({persons}) => {
  return (
    <div>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
        {persons.map((person, index) => (
        <li key={person.name + index + person.id}>
          {person.name} {' '}{person.number}
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Persons