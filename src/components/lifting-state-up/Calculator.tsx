import * as React from 'react';
import BoilingVerdict from './BoilingVerdict';
import { TemperatureInput } from './TemperatureInput';

function tryConvert(temperature: any, convert: any) {
    const input = parseFloat(temperature);
    //
    if (isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function toCelsius(fahrenheit: number) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
    return (celsius * 9 / 5) + 32;
}

class Calculator extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature: number) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature: number) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(celsius)}
                />
            </div>
        );
    }
}

export default Calculator;
