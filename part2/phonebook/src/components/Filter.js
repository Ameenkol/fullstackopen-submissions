
const Filter = ({filterText, handleFilterChange, filteredContacts}) => {
  return (
     <div style={{maxHeight: "fit-content"}}>
        Filter shown with {' '}
          <input
            value={filterText}
            onChange={handleFilterChange}
            type="text"
            />
        {filteredContacts.length > 0 ?
          <ul style={{display: "flex", flexDirection: "column-reverse", listStyle: 'none'}}>
            {filteredContacts.map((each, index) => (
              <li key={each.name+index}>
                {each.name + ' ' + each.number}
              </li>))}
          </ul>
          :
          <p style={{fontStyle: "semi-bold"}}>No contact to show at the moment</p>}
        
      </div>
  )
}

export default Filter