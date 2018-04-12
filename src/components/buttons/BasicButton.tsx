import * as React from 'react';

class BasicButton extends React.Component {
    lasers = 22;
    constructor(props: any) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        // this.activateLasers = this.activateLasers.bind(this);
    }

    render() {
        return (
            <button onClick={this.activateLasers}>
                Activate Lasers
            </button>
        );
    }

    // activateLasers() { ... } <- here you have to bind this in constructor
    // class fields syntax => not necessary to bind this in constructor
    activateLasers = ()  => {
        alert('LASEEERS ' + this.lasers);
    }
}

export default BasicButton;
