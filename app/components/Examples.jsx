var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function(){
//     return(
//       <h3>Examples Comp</h3>
//     )
//   }
// });

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here's how it works</p>
      <ol>
        <li>
          <Link to="/?location=Wroclaw">Wrocław, Poland</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
