import * as React from 'react';

// function component as arrow function
// const Clock = (props: { date: Date }) => {
//     return (
//         <div>
//             <h1>Clock timer</h1>
//             <p>It is {props.date.toLocaleTimeString()}.</p>
//         </div>
//     );
// };

// function component as function
// function Clock(props: { date: Date }) {
//     return (
//         <div>
//             <h1>Clock timer</h1>
//             <p>It is {props.date.toLocaleTimeString()}.</p>
//         </div>
//     );
// }

interface Props { /* declare your component's props here */ }
interface State {
    date: Date;
}

class Clock extends React.Component<Props, State> {
    timerID: any;

    constructor(props: Props) {
        super(props);
        this.state = {date: new Date()};
    }

    // lifecycle hook after component is inserted in the DOM
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // If the Clock component is ever removed from the DOM, React calls the componentWillUnmount()
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // Because of setState() call, React knows the state has changed, and calls the render() method again
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Clock timer</h1>
                <p>It is {this.state.date.toLocaleTimeString()}.</p>
            </div>
        );
    }
}

export default Clock;