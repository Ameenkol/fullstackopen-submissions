import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')
  const [filterPerson, setFilterPerson] = useState([])
  
  const addPerson = (e) => {
    e.preventDefault();
    if (persons.some(person => person.name === newName)) {
        setTimeout(() => {
          alert(`${newName} is already added to phonebook`)
          setNewName('')
          setNewNumber('')
        }, 2000);
        return
    }

    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    
    setPersons(persons.concat(personObj));
    setNewName('')
    setNewNumber('')
  }

  const filters = persons.filter((person) => person.name === filterText);
  const filteredContacts = filterPerson.concat(filters)

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilterText(e.target.value)
    setFilterPerson(filteredContacts)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div style={{maxHeight: "fit-content"}}>
        Filter shown with
          <input
            value={filterText}
            onChange={handleFilterChange}
            type="text"
            />
        {filteredContacts.length > 0 ?
          <ul style={{display: "flex", flexDirection: "column-reverse"}}>
            {filteredContacts.map((each, index) => (
              <li key={each.name+index}>
                {each.name + ' ' + each.number}
              </li>))}
          </ul>
          :
          <p style={{fontStyle: "semi-bold"}}>No contact to show at the moment</p>}
        
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div style={{marginBottom: '5px'}}>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>

        <div style={{marginBottom: '5px'}}>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>

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

export default App