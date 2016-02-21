var React = require('react');
var Chair = require('./Chair');

class Room extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            initialNumberOfChairs: this.props.initialNumberOfChairs
        };
    }

    componentDidMount() {
        console.log('room mounted');
    }

    determineChairPosition(chairIndex) {
        // http://stackoverflow.com/questions/10152390/dynamically-arrange-some-elements-around-a-circle
        // (x + r cos(2kπ/n), y + r sin(2kπ/n))
        // x = x origin
        // y = y origin
        // r = radius/distance
        var x = 235 + Math.floor(235 * Math.cos((2 * Math.PI * chairIndex) / this.props.initialNumberOfChairs));
        var y = 235 + Math.floor(235 * Math.sin((2 * Math.PI * chairIndex) / this.props.initialNumberOfChairs));

        return x +',' + y;
        //return 235+','+235
    }

    generateChairItems() {
        var noOfItems = this.props.initialNumberOfChairs;
        var arr = [];

        for (var i = 1, len = noOfItems; i <= len; i++) {
            arr[i] = <Chair className="Chair name" key={i} chairPosCoord={this.determineChairPosition(i)} />;
        }

        this.chairs = arr;

        return arr;
    }

    startFiring() {

    }

    render() {
        return (
            <div className="room"></div>
            )
        }

}

module.exports = Room;
