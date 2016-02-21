var React = require('react');

class Chair extends React.Component {

	constructor(props) {

        super(props);
    }

	componentDidMount() {}

	render() {
		var coords = this.props.chairPosCoord.split(',');
		var style = {
			top: coords[1],
			right: coords[0]
		};

		return (
			<div className="chair" data-chair-number={this.props.chairNum} style={style}>{this.props.name}</div>
		)
	}
};

module.exports = Chair;
