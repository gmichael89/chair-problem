var React = require('react');
var ArrayHelper = require('../helpers/Array');

class Settings extends React.Component {

	constructor() {
        super();
        //this.state = {count: props.initialCount};
    }

	componentDidMount() {
		console.log('SettingsPanel');
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
							onChange={this._handleNoOfChairsChange} />
					</label>
					<div className="setting-error-message gl-hide">
						Please only enter the characters <b>0</b> or <b>1</b>. Note: There must be at least one <b>1</b>.
					</div>
				</div>

				<div className="setting-wrapper">
					<label htmlFor="firingPatternInput">
						What firing pattern? Choose up to 10 characters, 1 for firing, 0 for skipping.
						<input
							type="text"
							id="firingPatternInput"
							className="setting setting--firing-pattern"
							onChange={this._handlePatternChange} />
					</label>
				</div>

				<button onClick={this._handleSetUp}>Begin</button>
			</div>
		)
	}

	_handlePatternChange(e) {
		var val = e.target.value;
		//debugger;
		if (val.length > 10){
			e.target.value = ArrayHelper.spliceArray(val, -1, 1).join('');
		}

		if (val.match(/^[01]*$/) != void 0) {
			console.log(val);
		}
		else {
			e.target.value = ArrayHelper.spliceArray(val, -1, 1).join('');
		}
	}

	_handleNoOfChairsChange (e) {
		var val = e.target.value;
		if (val.match(/^[0-9]*$/) != void 0) {

			if (val < 10) {

			}
			else {

			}

			console.log(val)
		}
	}

	_handleSetUp(){
		console.log('_handleSetUp');
	}

};

module.exports = Settings;
