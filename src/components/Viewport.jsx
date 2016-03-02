var React = require('react');
var Settings = require('./Settings');
var Room = require('./Room');

class Viewport extends React.Component {

    constructor() {
        super();

        this.state = {
            isFiringCommenced: false,
            configSettings: null
        };
    }

    componentDidMount() { }

    render() {
        var self = this;
        return (
            <div className="viewport">
                <Settings config={this.props.config} onBegin={this._settingsBegin.bind(this)} />
                {
                    (function(){
                        debugger;
                        if (self.state.isFiringCommenced) {

                            return <Room config={self.state.configSettings} />
                        }
                    }())
                }
            </div>
        )
    }

    _settingsBegin(configSettings){

        this.setState({
            isFiringCommenced: true,
            configSettings
        });
    }
};

module.exports = Viewport;
