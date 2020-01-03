import * as React from 'react';
import { Component } from 'react';

// import classnames from 'classnames';
import Slider from 'react-rangeslider';

import { connectField } from 'uniforms';
import { wrapField } from 'uniforms-bootstrap3';

class RangeSliderUnwrapped extends Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      sliderValue: props.initialValue || 50,
    };
    this.handleOnChangeComplete = this.handleOnChangeComplete.bind(this);
    props.onChange(this.state.sliderValue);
  }

  handleOnChangeComplete(newVal: Number) {
    this.setState({
      sliderValue: newVal,
    });
    if (this.props.onChangeComplete) {
      this.props.onChangeComplete(newVal);
    }
    if (this.props.onChange) {
      this.props.onChange(newVal);
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    let { sliderValue } = this.state;

    return (
      <div className="slider custom-labels">
        <input
          type="number"
          className="form-control value slider-value"
          value={this.state.sliderValue}
          min={this.props.min || 0}
          max={this.props.max || 100}
          step={this.props.step || 1}
          onChange={(evt: any) => {
            this.handleOnChangeComplete(evt.target.value * 1); // *1 is a hacky conversion that works for Integers and Floats
          }}
        />
        <div
          className="slider-control"
          style={{
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none',
          }}
        >
          <Slider
            min={this.props.min || 0}
            max={this.props.max || 100}
            step={this.props.step || 1}
            value={sliderValue}
            orientation={this.props.orientation || 'horizontal'}
            reverse={this.props.reverse || false}
            tooltip={this.props.tooltip || false}
            labels={this.props.labels}
            handleLabel={this.props.handleLabel}
            onChangeStart={this.props.onChangeStart}
            onChange={this.handleOnChangeComplete}
            // onChangeComplete={}
          />
        </div>
      </div>
    );
  }
}

const RangeSliderField = (props: any) => {
  // polyfill with react-flatpickr
  return wrapField(
    props,
    <RangeSliderUnwrapped
      min={props.min || 0}
      max={props.max || 100}
      step={props.step || 1}
      orientation={props.options.orientation || 'horizontal'}
      reverse={props.options.reverse || false}
      tooltip={props.options.tooltip || false}
      labels={props.options.labels}
      handleLabel={props.options.handleLabel}
      onChangeStart={props.options.onChangeStart}
      handleOnChangeComplete={props.options.onChangeComplete}
      onChange={props.onChange}
      initialValue={props.options.initialValue}
    />
  );
};

export default connectField(RangeSliderField);
