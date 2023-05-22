import React from 'react';
import './ListItem.css';
import './CountryDetail.css'


const countryDetail = function({country,onFavSelected}) {

  const handleClick = (country) => {
    onFavSelected(country)
  }

    return (
      <>
      <h2 id='country-title'>{country.name.common}</h2>
      <div className="country-details-container">

        <div className='country-detail'>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population} </p>
        <p>Region:{country.region}</p>
        </div>
        <div className='country-flag'>
          <img src={country.flags.png} alt={country.flags.alt}/>
        </div>
      
      </div>
      <input name='addremove' value="Favorite" type='submit' onClick={() => handleClick(country)}/>
      </>
    )

}
export default countryDetail;