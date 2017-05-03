var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <ul className="menu">
            <li><input type="text" ref="location" placeholder="enter a location"/></li>
            <li><input type="submit" className="button" value="Submit"/></li>
          </ul>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
