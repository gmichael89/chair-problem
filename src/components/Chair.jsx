var React = require('react');

var Chair = React.createClass({
	componentDidMount: function() {
  	console.log('mount chair: ', this.props.chairPosCoord);
    console.log(ReactDOM.findDOMNode(this));
  },
  render: function() {
  	var coords = this.props.chairPosCoord.split(',');
  	var style = {
      top: coords[1],
      right: coords[0]
    };
    console.log(coords);
    return <div style={style} className="chair" onMouseEnter={this.hovered}>{this.props.name}</div>;
  },
  hovered: function(){
  	console.log('hovered')
  }
});

module.exports = Chair;
