import React from 'react';
import Navigation from './Navigation';
import WeatherSearch from './WeatherSearch';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      messageOne: '',
      messageTwo: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch = (e) => {
    e.preventDefault();

    const location = this.state.location;

    this.setState(() => ({
      messageOne: 'Loading...',
      messageTwo: ''
    }))
    
    if (!location) {
      return this.setState(() => ({
        messageOne: 'You must provide a location!'
      }))
    }

    fetch('/weather?address=' + location).then((response) => {
      response.json().then((data) => {
        if (data.error) {
          return this.setState(() => ({ 
            messageOne: data.error
          }))
        }
        
        this.setState(() => ({
          messageOne: data.location,
          messageTwo: data.forecast
        }))
      })
    });
  }

  handleChange = (e) => {
    const location = e.target.value;
    this.setState(() => ({ location }));
  }

  render() {
    return (
      <div>
        <h1>Weather</h1>
        <Navigation />
        <p>Use this site to get your weather!</p>
        <WeatherSearch 
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          messageOne={this.state.messageOne}
          messageTwo={this.state.messageTwo}
          location={this.state.location}
        />
      </div>
    );
  }
}