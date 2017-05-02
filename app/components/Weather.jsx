var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherInfo = require('WeatherInfo');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(err){
      that.setState({
        isLoading: false
      });
      alert(err);
    });
  },
  render: function(){
  //  var location = this.state.location;
  //  var temp = this.state.temp;
    var {isLoading, temp, location} = this.state; //ES6

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather...</h3>;
      } else if(temp && location) {
        return <WeatherInfo location={location} temp={temp}/>;
      }
    }

    return(
      <div>
        <h3>Weather App</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
