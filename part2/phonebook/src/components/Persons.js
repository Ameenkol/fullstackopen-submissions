import React from 'react'

const Persons = ({persons, handleDelete}) => {
  return (
    <div>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
        {persons.map((person, index) => (
        <li className='contactlist' key={person.name + index + person.id}>
            {person.name} {' '}{person.number}{' '}
            <input
              type='button'
              value='Delete'
              onClick={(e) => handleDelete(person)}
              style={{
                backgroundColor: "grey",
                color: "white",
                borderRadius: "5px",
                outline: "none",
                border: "none",
                cursor: "pointer",
                onFocus: {backgroundColor: "blue"}
              }}
            />
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Persons