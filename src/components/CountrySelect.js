import React from 'react';
import ListItem from './ListItem';

const CountrySelect = ({countries,onCountrySelected}) => {

    const CountryItems = countries.map((country, index) => {
        return <ListItem country={country} key={index}/>
      })
  
    const onChange = function(evt) {
        const country = countries.filter(country=> {
            if (country.cca2 === evt.target.value) {
                return true
            } else {
                return false
            }
        })
        onCountrySelected(country[0])
    }

    
    if (!countries.length) {
        return null
    }

    return (
  
    <select name='countries-dd' id='countries-dd' onChange={onChange}>
       {CountryItems}
    </select>
  
    )
}

export default CountrySelect