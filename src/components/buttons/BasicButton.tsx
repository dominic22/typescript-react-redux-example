import * as React from 'react';

// avatar
class BasicButton extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.activateLasers.bind(22)}>
                Activate Lasers
            </button>
        );
    }

    activateLasers() {
        alert('LASEEERS ' + this);
    }
}

export default BasicButton;
