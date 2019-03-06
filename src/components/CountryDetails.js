import React from 'react';
import './CountryDetails.css'

const CountryDetails = ({ countryDetails }) => {
    if (!countryDetails) return null;
    return (
      <dl>
        <dt>Flag</dt>
        <dd>{countryDetails.flag}</dd>
        <img className="flag" src={countryDetails.flag}/>
        
        <dt>Name</dt>
        <dd>{countryDetails.name}</dd>
  
        <dt>Capital</dt>
        <dd>{countryDetails.capital}</dd>
  
        <dt>Population</dt>
        <dd>{countryDetails.population}</dd>
        
        <dt>Native Name</dt>
        <dd>{countryDetails.nativeName}</dd>
      </dl>
    );
  }
  
  export default CountryDetails;