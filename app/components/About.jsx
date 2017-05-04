var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//       <h3>About Comp</h3>
//     )
//   }
// });

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Demo project for educational purposes. Resources used:</p>
      <ol>
        <li><a href="https://github.com/jwm0/ReactWeather">Github repo</a></li>
        <li><a href="http://foundation.zurb.com/">Foundation</a></li>
        <li><a href="https://openweathermap.org/">API used for fetching weather</a></li>
      </ol>
    </div>
  )
};

module.exports = About;
