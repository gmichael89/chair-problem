var React = require('react');
var ArrayHelper = require('../helpers/Array');

class Settings extends React.Component {

	constructor(props) {
        super(props);

		this.state = {
			saved: false
		};
    }

	componentDidMount() {
		//console.log(this);
	}

	render() {
		return (
			<div className="settings-panel">

				<div className="setting-wrapper">
					<label htmlFor="noOfChairsInput">
						How many chairs?
						<input
							type="text"
							id="noOfChairsInput"
							className="setting setting--no-of-chairs"
							defaultValue={this.props.config.numberOfChairs}
							onChange={this._handleNoOfChairsChange.bind(this)} />
					</label>
					<div className="setting-error-message gl-hide">
						Please only enter the characters <b>0</b> or <b>1</b>. Note: There must be at least one <b>1</b>.
					</div>
				</div>
				<div className="setting-wrapper">
					<label htmlFor="firingIntervalInput">
						Firing interval interval (ms)?
						<input
							type="text"
							id="firingInterval"
							className="setting setting--firing-interval"
							defaultValue={this.props.config.firingInterval}
							onChange={this._handleFiringIntervalChange.bind(this)} />
					</label>
					<div className="setting-error-message gl-hide">
						Please only enter only numbers.
					</div>
				</div>

				<button onClick={this._handleSetUp.bind(this)}>Begin</button>
			</div>
		)
	}

	// _handlePatternChange(e) {
	// 	var val = e.target.value;
	// 	//debugger;
	// 	if (val.length > 10){
	// 		e.target.value = ArrayHelper.spliceArray(val, -1, 1).join('');
	// 	}
	//
	// 	if (val.match(/^[01]*$/) != void 0) {
	// 		console.log(val);
	// 		this.setState(val);
	// 	}
	// 	else {
	// 		e.target.value = ArrayHelper.spliceArray(val, -1, 1).join('');
	// 	}
	// }

	_handleNoOfChairsChange(e) {
		var val = e.target.value;
		if (val.match(/^[0-9]*$/) != void 0) {

			if (val < 10) {
				this.setState(val);
			}
			else {

			}

			console.log(val)
		}
	}

	_handleFiringIntervalChange (e) {

		var val = e.target.value;

		if (val.match(/^[0-9]*$/) != void 0) {
			console.log(val)

			this.setState({
				value: val
			});
		}
	}

	_handleSetUp (e) {
		//console.log('_handleSetUp: ', e);
		this.props.onBegin();
	}

};

module.exports = Settings;
