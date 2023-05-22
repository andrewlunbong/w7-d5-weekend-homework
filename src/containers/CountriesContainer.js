import React, { useState, useEffect } from 'react';
import CountrySelect from '../components/CountrySelect';
import CountryDetail from '../components/CountryDetail';
import CountryList from '../components/CountryList'
import './CountriesContainer.css';


const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favCountries, setFavCountries] = useState([])
    const [selectedFavCountry, setSelectedFav] = useState(null)
    
    useEffect(() => {
      getCountries();
    }, [])
    

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const removeFromFav = function(countryToRemove) {
       
        const result = favCountries.filter((country)=>{
            if (!(country.name.common === countryToRemove.name.common)) {
                return true
            } else {
                return false
            }
        })
       
        return result
    }

    const onFavSelected = function(country) {
        
        if (!favCountries.includes(country)) {
            const updatedFav = [...favCountries,country]
            setFavCountries(updatedFav)
        } else {
            const updateFav = removeFromFav(country)
            setFavCountries(updateFav)
        }
    }
   
    const onCountrySelected = function(country) {
        setSelectedCountry(country)
    }

    

   
    

    return (
        <>
        <div className="main-container">
            <CountrySelect countries={countries} onCountrySelected={onCountrySelected}/>
        </div>
            {selectedCountry? <CountryDetail country={selectedCountry} onFavSelected={onFavSelected}/>:null}
            <h2 id='fav'>Favorites</h2>
            <CountryList countries={favCountries} onFavSelected={onFavSelected}/>
        </>

    )
}

export default CountryContainer;