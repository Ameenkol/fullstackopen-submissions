import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from "./Filter";
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([{name: '', number: '', id: Number('')}])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')
  const [filterPerson, setFilterPerson] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => setPersons(response.data))
    
  }, [])

  const addPerson = (e) => {
    e.preventDefault();
    if (persons.some(person => person.name === newName)) {
          alert(`${newName} is already added to phonebook`)
          setNewName('')
          setNewNumber('')
        return
    }

    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    axios.post('http://localhost:3001/persons', personObj)
      .then((response) => {
        return response.data
        })

    setPersons(persons.concat(personObj));
    setNewName('')
    setNewNumber('')
  }

  const filters = persons.filter((person) => {
    if (filterText === '') {
      return null;
    }
    return person.name.toLowerCase().includes(filterText)
  });
  
  const filteredContacts = filters

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

      <Filter
        handleFilterChange={handleFilterChange}
        filterText={filterText}
        filteredContacts={filteredContacts}
      />

      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons
        persons={persons} 
      />
      
    </div>
  )
}

export default App