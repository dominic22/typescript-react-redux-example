import * as React from 'react';

export const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export class TemperatureInput extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: any) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        );
    }
}
