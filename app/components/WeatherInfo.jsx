var React = require('react');

var WeatherInfo = ({temp, location}) => {
//  var {temp, location} = props;  //ES6
  return(
    <h3 className="text-center">It's {temp}°C in {location}</h3>
  );
}

module.exports = WeatherInfo;
