import { useState, useEffect } from 'react';
import axios from 'axios';

import Input from "./Input";
import List from './List';

function App() {
  const [list, setList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [show, setShow] = useState(false)
  const [filterResult, setFilterResult] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(res => {
      setList(res.data)
    })
    
  }, [])

  const handleChange = (e) => {
    let lowerCase = e.target.value.toLowerCase()
    setSearchTerm(lowerCase)
  }

  const countryToShow = list.filter((country) => {
    if (searchTerm === '') {
      return null
    }
    
    return country.name.common.toLowerCase().includes(searchTerm)
  })


  const showDetails = (i) => {
    setShow(true)
    const countryToDisplay = countryToShow[i];
    setFilterResult(countryToDisplay)
  }

  return (
    <div className="App">

      <h2>Find Countries</h2>
      <div style={{maxHeight: 'fit-content', overflow:'auto'}}>
        <Input
          searchTerm={searchTerm}
          handleChange={handleChange}
          
        />
      </div>

      <h3>Country List</h3>
      <List
        countryToShow={countryToShow}
        showDetails={showDetails}
        show={show}
        filterResult={filterResult}
        />
    </div>
  );
}

export default App;
