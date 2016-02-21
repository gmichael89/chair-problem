var React = require('react');

class WallOfShame extends React.Component {

	constructor(props) {

        super(props);
    }

	componentDidMount() {}

	render() {

		return (
			<div className="wall-of-shame">
                <h2>Wall of Shame</h2>
                <ul>
                    {
                        this.props.fireLog.map(function(log, index){
                            return <li key={index}>{log}</li>
                        })
                    }
                </ul>
            </div>
		)
	}
};

module.exports = WallOfShame;
