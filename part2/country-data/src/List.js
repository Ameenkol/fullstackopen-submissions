
const List = ({ countryToShow, showDetails, show, filterResult }) => {

  return (
     <div style={{maxHeight: 'fit-content', listStyle:'none'}}>
        {countryToShow.length > 10
        ?
        
          <p>Too many matches, specify another filter</p>
        :
        
          (countryToShow.length > 1
          ?
          
          (show === false
            ?
            
            countryToShow.map((country, i) => (
              <li
                key={country.capital[0] + country.name.common + i}
              >
                  <p>{country.name.common}{' '}
                    <button
                      onClick={(e) => showDetails(i)}>show</button>
                  </p>
                </li>
            ))
            :

            <div>
              <h2>{filterResult.name.common}</h2>
              <p>{filterResult.capital}</p>
              <p>{filterResult.area}</p>

              <h4>Languages</h4>
                <ul>
                  <li>
                    {Object.values(filterResult.languages)}             
                  </li>
                </ul>
              <>
              <img src={filterResult.flags.png} alt='flag'/>
            </>
            </div>
          )
          :
          
          countryToShow.map((country) => {
          let keys = {}

          const nations = country.languages
          Object.assign(keys, nations)
          const languages = Object.values(keys)

          return (
          <div key={country.capital + country.name.common}>
            <h2>{country.name.common}</h2>
            <p>{country.capital}</p>
            <p>{country.area}</p>
            
            <h4>Languages</h4>
            <ul>
              {languages.map((lang, i) => (
                <li key={lang + i}>
                  {lang}
                </li>
            )) }
            </ul>
            
            <>
              <img src={country.flags.png}  alt='flag'/>
            </>
          </div>
        )
        }))}
      </div>
  )
}

export default List