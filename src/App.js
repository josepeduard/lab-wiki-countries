import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom'
import countries from './data/countries.json';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Country from "./components/Country.js"



class App extends Component {

  state = {
    countriesList: countries
  }

  addCountry(name,flag){
    const newCountry = {flag, name}
    this.setState({
      countriesList: [...this.state.countriesList, newCountry]
    })
  }

  

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                {this.state.countriesList.map((item, index) => {
                  return <Country
                    key ={`id${index}`}
                    flag={item.flag}
                    name={item.name.common} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App
