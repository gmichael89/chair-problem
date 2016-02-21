var Chair = require('./Chair');
var WallOfShame = require('./WallOfShame');

import React, {Component} from 'react';

class Room extends Component {

    constructor(props) {

        super(props);

        this.state = {
            numberOfChairs: this.props.config.numberOfChairs,
            chairs: [],
            skipPattern: 1,
            fireLog: []
        };
    }

    componentDidMount() {

        setTimeout((function(){
            this.beginFiring();
        }).bind(this), 1000);
    }

    generateChairItems() {

        //If chairs havent already been initialised, create them
        if (!this.state.chairs.length){

            let arr = [];
            let noOfItems = this.state.numberOfChairs;

            for (var i = 0, len = this.state.numberOfChairs; i < len; i++) {
                arr[i] = <Chair key={i+1} chairNum={i+1} chairPosCoord={this.determineChairPosition(i+1)} isFired={false} />;
            }

            this.state.chairs = arr;
        }
        else {

            this.state.chairs = this.state.chairs.map(function(item, index) {

                return React.cloneElement(item, {
                    chairPosCoord: this.determineChairPosition(index+1)
                });
            }, this);
        }

        return this.state.chairs;
    }

    beginFiring() {

        var currentIndexToFire = 0;
        var chairsArr = this.state.chairs;
        var skipPattern = this.state.skipPattern;
        var fireLog =  this.state.fireLog;

        var firingTimeout = (function(){

            if (chairsArr.length == 1) {
                clearInterval(firingTimeout);
                return;
            }

            if (currentIndexToFire > chairsArr.length) {
                currentIndexToFire = currentIndexToFire % chairsArr.length;
            }

            var firedChair = chairsArr.splice(currentIndexToFire, 1);
            // debugger;
            console.log('Firing: #', firedChair[0].key);

            fireLog.push('Firing chair: #' + firedChair[0].key);

            currentIndexToFire += skipPattern;
            skipPattern++;

            this.setState({
                numberOfChairs: chairsArr.length,
                chairs: chairsArr,
                fireLog
            });
        }).bind(this);

        setInterval(firingTimeout, this.props.config.firingInterval);
    }

    render() {

        return (
            <div>
                <div className="room">
                    {
                        this.generateChairItems()
                    }
                </div>
                <WallOfShame fireLog={this.state.fireLog} />
            </div>
        )
    }

    //<input type="button" class="" value="Stop" onClick={this._handleOnStop} />
    // _handleOnStop(){
    //     clearInterval();
    // }

    determineChairPosition(chairIndex) {
        // http://stackoverflow.com/questions/10152390/dynamically-arrange-some-elements-around-a-circle
        // (x + r cos(2kπ/n), y + r sin(2kπ/n))
        // x = x origin
        // y = y origin
        // r = radius/distance
        //debugger;
        var x = 245 + Math.floor(245 * Math.cos((2 * Math.PI * chairIndex) / this.state.numberOfChairs));
        var y = 245 + Math.floor(245 * Math.sin((2 * Math.PI * chairIndex) / this.state.numberOfChairs));

        return x +',' + y;
    }
}

module.exports = Room;
