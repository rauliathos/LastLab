import React from 'react';

const CountrySelector = (props) => {

    const mapAllCountries = props.countries.map((country, index)=>{
            return <option key={index} value={index}>{country.name}</option>
    })

    function handleChange(event){
        props.onSelection(event.target.value)
    }


    return(
            <select defaultValue="banana" onChange={handleChange}>
                <option disabled value="banana">Choose a country... </option>
                {mapAllCountries}
            </select>
    )

}


export default CountrySelector;