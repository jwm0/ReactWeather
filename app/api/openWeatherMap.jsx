var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=5bd1b47dc76a23b839f8e999fd627ab7&units=metric';

//5bd1b47dc76a23b839f8e999fd627ab7 api
//http://samples.openweathermap.org/data/2.5/find?q=London,uk&units=metric&appid=5bd1b47dc76a23b839f8e999fd627ab7

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${location}`;

    return axios.get(requestUrl).then(function(res){
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp;
      }
    },function(res){
      throw new Error('Location not found');
    });
  }
}
