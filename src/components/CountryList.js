import React from 'react';

const CountryList = ({countries,onFavSelected}) => {

  const handleClick = (country) => {
    onFavSelected(country)
  }

  const CountryItems = countries.map((country, index) => {
    return <p country={country} key={index}>{country.name.common}</p>

  })

  return (

    <>
      {CountryItems}
    </>

  )
}

export default CountryList;