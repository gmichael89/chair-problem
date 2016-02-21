var React = require('react');
var Settings = require('./Settings');
var Room = require('./Room');

class Viewport extends React.Component {

    constructor() {
        super();
        //this.state = {count: props.initialCount};
    }

    componentDidMount() {
        console.log(this.props.config);
    }

    render() {
        return (
            <div className="viewport">
                <Settings />
                <Room />
            </div>
        )
    }
};

module.exports = Viewport;
