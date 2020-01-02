import 'react-app-polyfill/ie11';
import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { BetterCheckbox, FlatPickrField, RangeSlider } from '../.';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm } from 'uniforms-bootstrap3';
import Slider from 'react-rangeslider';
import moment from 'moment';
// To include the default styles
import 'react-rangeslider/lib/index.css'
import 'awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css';
import './awesome-checkbox-fontawesome-5-fix.css';

const ss = new SimpleSchema({

  betterBoolean: {
    type: Boolean,
    uniforms: {
      component: BetterCheckbox,
      inputClassName: "checkbox-circle checkbox-info"
    }
  },
  betterDate: {
    type: Date,
    // defaultValue: moment()
    //   .startOf("day")
    //   .toDate(), // midnight today
    uniforms: {
      component: FlatPickrField,
      lang: "en_GB",
      options: {
        disableMobile: false,
        defaultDate: moment()
          .startOf("day")
          .toDate(), // midnight today
        // disable: [
        //   function (date) {
        //     // return true to disable
        //     // disable future dates: if the selected day is after 23:59:59.999 today then it's a future date
        //     return moment()
        //       .endOf("day")
        //       .isBefore(moment(date));
        //   }
        // ],
        enableTime: false,
        mode: "single",
        notifyChange: function (dateStr) {
          console.log(`TimesheetSchema.betterDate.notifyChange(${JSON.stringify(dateStr)})`);
        }
      }
    }
  },
  betterTime: {
    type: Date,
    uniforms: {
      component: FlatPickrField,
      lang: "en_GB",
      options: {
        defaultDate: moment()
          .startOf("day")
          .toDate(), // midnight today
        dateFormat: "H:i",
        enableTime: true,
        noCalendar: true,
        mode: "single",
        notifyChange: function (dateStr) {
          console.log(`TimesheetSchema.betterTime.notifyChange(${JSON.stringify(dateStr)})`);
        }
      }
    }
  },
  betterDateTime: {
    type: Date,
    // defaultValue: moment()
    //   .startOf("day")
    //   .toDate(), // midnight today
    uniforms: {
      component: FlatPickrField,
      lang: "en_GB",
      options: {
        disableMobile: false,
        defaultDate: moment()
          .startOf("day")
          .toDate(), // midnight today
        dateFormat: "Y-m-d H:i",
        enableTime: true,
        mode: "single",
        notifyChange: function (dateStr) {
          console.log(`TimesheetSchema.betterDateTime.notifyChange(${JSON.stringify(dateStr)})`);
        }
      }
    }
  },
  betterNumber: {
    type: Number,
    min: -55,
    max: 50,
    uniforms: {
      component: RangeSlider,
      step: 5,
      options: {
        tooltip: true,
        initialValue: 25,
        onChangeComplete: function (newVal) {
          console.log(newVal);
        }
      }
    }
  }
});

const bridge = new SimpleSchema2Bridge(ss);

const App = () => {
  return (
    <div className="container">
      <h1>Juto Uniforms Components - Demo</h1>
      <AutoForm schema={bridge} onSubmit={console.log} />

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
