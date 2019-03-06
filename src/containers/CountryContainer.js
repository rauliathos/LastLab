import React, {Component} from 'react';
import CountrySelector from '../components/CountrySelector';
import CountryDetails from '../components/CountryDetails';
import './CountryContainer.css';


class CountryContainer extends Component{
    constructor(props){
     super(props)
        this.state = {
            selectedCountry: null
        }

        this.handleCountrySelected = this.handleCountrySelected.bind(this);
    }
   
    handleCountrySelected(index){
        const selectedCountryObject = this.props.countries[index];
        console.log(selectedCountryObject)
        this.setState({selectedCountry: selectedCountryObject})
    }
    
    
    render(){
        return( 
            <div className="countryContainer">
                <CountrySelector countries={this.props.countries} onSelection={this.handleCountrySelected}/>
                <CountryDetails countryDetails={this.state.selectedCountry}/>
            </div>
        )
    }
}
export default CountryContainer;