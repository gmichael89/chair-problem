var React = require('react');
var Settings = require('./Settings');
var Room = require('./Room');

class Viewport extends React.Component {

    constructor() {
        super();

        this.state = {
            isFiringCommenced: false
        };
    }

    componentDidMount() {
        //console.log('Viewport: ', this.props);//this.props.config);
    }

    render() {
        var self = this;
        return (
            <div className="viewport">
                <Settings config={this.props.config} onBegin={this._settingsBegin.bind(this)} />
                {
                    (function(){
                        if (self.state.isFiringCommenced) {

                            // TODO: Need to pass in the settings from the Settings panel and not the config.
                            return <Room config={self.props.config} />
                        }
                    }())
                }
            </div>
        )
    }

    _settingsBegin(){
        console.log('_settingsBegin');
        this.setState({
            isFiringCommenced: true
        })
    }
};

module.exports = Viewport;
