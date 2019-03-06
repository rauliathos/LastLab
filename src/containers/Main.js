import React, {Component} from 'react';
import CountryContainer from './CountryContainer';
import './Main.css';

class Main extends Component{
    constructor(props) {
        super(props)
        this.state = {
            countries:[]
        }

    }

    componentDidMount() {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
          .then(res => res.json())
          .then(data => this.setState({ countries: data }))
    }

   

    render(){
        return(
         <div className="main">
            <CountryContainer className="countryContainer" countries= {this.state.countries}/> 
            <h1>VS</h1>
            <CountryContainer className="countryContainer" countries = {this.state.countries} onCountrySelected={this.handleCountrySelected}/>
         </div>
        )
    }

}
export default Main;