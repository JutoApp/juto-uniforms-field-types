import * as React from 'react'
import { connectField } from 'uniforms';
import classnames from 'classnames';
import { wrapField } from 'uniforms-bootstrap3';
import 'flatpickr/dist/themes/dark.css'

import Flatpickr from 'react-flatpickr'
import { Component } from "react";

class FlatPickrDate extends Component<any, any> {
  constructor(props: any) {
    super(props);

    const defaultDate = props.defaultDate || new Date();

    this.state = {
      date: defaultDate
    };
    this.handleOnChangeSingle.bind(this.handleOnChangeSingle);
  }

  handleOnChangeSingle(dateStr: String, instance: any) {
    const newDate = instance.parseDate(dateStr, this.props.dateFormat);
    this.setState({ date: newDate });
    if (this.props.notifyChange) {
      this.props.notifyChange(newDate);
    }
    this.props.onChange(newDate);
  }

  render() {
    const date = this.state.date;
    return (
      <Flatpickr
        className={classnames(this.props.inputClassName, 'form-control', {
          'form-control-danger': this.props.error,
        })}
        value={date}
        onValueUpdate={(dateObj: any, dateStr: any, instance: any) => {
          this.handleOnChangeSingle(dateStr, instance);
        }}
        onChange={(selectedDates: any, dateStr: any, instance: any) => {
          this.handleOnChangeSingle(dateStr, instance);
        }}
        id={this.props.id}
        name={this.props.name}
        ref={this.props.ref}
        disabled={this.props.disabled || false}
        lang={this.props.lang || "en_US"}

        onClose={(this.props.onClose || null)}
        onOpen={(this.props.onOpen || null)}
        onReady={(this.props.onReady || null)}

        options={{
          //     altFormat: (this.props.altFormat || "F j, Y"),
          //     altInput: (this.props.altInput || false),
          //     altInputClass: (this.props.altInputClass || ""),
          allowInput: (this.props.allowInput || false),
          //     appendTo: (this.props.appendTo || null),
          //     ariaDateFormat: (this.props.ariaDateFormat || "F j, Y"),
          //     clickOpens: (this.props.clickOpens || true),
          dateFormat: (this.props.dateFormat || "Y-m-d"),
          defaultDate: (this.props.defaultDate || null),
          defaultHour: (this.props.defaultHour || 12),
          defaultMinute: (this.props.defaultMinute || 0),
          disable: (this.props.disable || []),
          disableMobile: (this.props.disableMobile || false),
          enable: (this.props.enable || []),
          enableTime: (this.props.enableTime || false),
          enableSeconds: (this.props.enableSeconds || false),
          //     // formatDate: (this.props.formatDate || null),
          hourIncrement: (this.props.hourIncrement || 1),
          inline: (this.props.inline || false),
          maxDate: (this.props.maxDate || null),
          minDate: (this.props.minDate || null),
          minuteIncrement: (this.props.minuteIncrement || 5),
          mode: (this.props.mode || "single"),
          nextArrow: (this.props.nextArrow || ">"),
          noCalendar: (this.props.noCalendar || false),
          //     parseDate: (this.props.parseDate || false),
          position: (this.props.position || "auto"),
          prevArrow: (this.props.prevArrow || "<"),
          shorthandCurrentMonth: (this.props.shorthandCurrentMonth || false),
          static: (this.props.static || false),
          time_24hr: (this.props.time_24hr || false),
          weekNumbers: (this.props.weekNumbers || false),
          showMonths: (this.props.showMonths || 1),
          wrap: (this.props.wrap || false)
        }}
      />
    )
  }
}

const FlatPickrField = (props: any) => {
  // polyfill with react-flatpickr
  return wrapField(
    props,
    <FlatPickrDate
      className={classnames(props.inputClassName, 'form-control', {
        'form-control-danger': props.error,
      })}
      id={props.id}
      ref={props.inputRef}
      disabled={props.disabled || false}
      name={props.name}
      lang={props.lang || "en_US"}

      altFormat={props.options.altFormat || "F j, Y"}
      altInput={props.options.altInput || false}
      altInputClass={props.options.altInputClass || ""}
      allowInput={props.options.allowInput || false}
      appendTo={props.options.appendTo || null}
      ariaDateFormat={props.options.ariaDateFormat || "F j, Y"}
      clickOpens={props.options.clickOpens || true}
      dateFormat={props.options.dateFormat || "Y-m-d"}
      defaultDate={props.options.defaultDate || null}
      defaultHour={props.options.defaultHour || 12}
      defaultMinute={props.options.defaultMinute || 0}
      disable={props.options.disable || []}
      disableMobile={props.options.disableMobile || false}
      enable={props.options.enable || []}
      enableTime={props.options.enableTime || false}
      enableSeconds={props.options.enableSeconds || false}
      formatDate={props.options.formatDate || undefined}
      hourIncrement={props.options.hourIncrement || 1}
      inline={props.options.inline || false}
      maxDate={props.options.maxDate || null}
      minDate={props.options.minDate || null}
      minuteIncrement={props.options.minuteIncrement || 5}
      mode={props.options.mode || "single"}
      nextArrow={props.options.nextArrow || ">"}
      noCalendar={props.options.noCalendar || false}
      notifyChange={props.options.notifyChange || null}
      onChange={(dateObj: any) => {
        props.onChange(dateObj);
      }}
      onClose={props.options.onClose || null}
      onOpen={props.options.onOpen || null}
      onReady={props.options.onReady || null}
      parseDate={props.options.parseDate || false}
      position={props.options.position || "auto"}
      prevArrow={props.options.prevArrow || "<"}
      shorthandCurrentMonth={props.options.shorthandCurrentMonth || false}
      static={props.options.static || false}
      time_24hr={props.options.time_24hr || false}
      weekNumbers={props.options.weekNumbers || false}
      showMonths={props.options.showMonths || 1}
      wrap={props.options.wrap || false}

    />
  );
};
export default connectField(FlatPickrField);
