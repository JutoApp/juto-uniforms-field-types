# Extra field types for React-Uniforms

See demo: [https://jutoapp.github.io/juto-uniforms-field-types/example/dist/index.html]()

These are additional field types for use with [uniforms](https://uniforms.tools), for Bootstrap 3 and 4.

Note: BetterCheckbox relies on Bootstrap (3 or 4) and FontAwesome

1. FlatPickr for dates and times
2. BetterCheckbox for checkboxes
3. RangeSlider for numeric inputs.

## Pictures

* BetterCheckbox for checkboxes
* FlatPickr for dates
    
    <img width="344" alt="image" src="https://user-images.githubusercontent.com/1751645/71654136-fd704c80-2d6a-11ea-8a4a-305bb47c2946.png">

* FlatPickr for times

    <img width="340" alt="image" src="https://user-images.githubusercontent.com/1751645/71654145-0cef9580-2d6b-11ea-94d6-d04ad268ff69.png">

* FlatPickr for date-times

    <img width="320" alt="image" src="https://user-images.githubusercontent.com/1751645/71654148-17119400-2d6b-11ea-9527-f045b03f75b2.png">

* RangeSlider for numeric inputs

    ![image](https://user-images.githubusercontent.com/1751645/71654190-5809a880-2d6b-11ea-844c-5cf1cc1e00cb.png)

## Example Usage

This example uses the Simple-Schema-2 bridge; other bridges should work.

```js
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
import './awesome-checkbox-fontawesome-5-fix.css'; // fontawesome 5 - see the example folder

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
```


## See Also

* [react-flatpickr](https://github.com/haoxins/react-flatpickr)
* [flatpickr-js](https://flatpickr.js.org)
* [awesome-bootstrap-checkbox](http://flatlogic.github.io/awesome-bootstrap-checkbox/)
* [react rangeslider](https://whoisandy.github.io/react-rangeslider/)


# Developers: TSDX React User Guide

This project is bootstrapped with TSDX. Let’s get you oriented with what’s here and how to use it.

> This TSDX setup is meant for developing React components (not apps!) that can be published to NPM. If you’re looking to build an app, you should use `create-react-app`, `razzle`, `nextjs`, `gatsby`, or `react-static`.

> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)

## Commands

TSDX scaffolds your new library inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, [we use Parcel's aliasing](https://github.com/palmerhq/tsdx/pull/88/files).

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Configuration

Code quality is [set up for you](https://github.com/palmerhq/tsdx/pull/45/files) with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`. This runs the test watcher (Jest) in an interactive mode. By default, runs tests related to files changed since the last commit.

#### Setup Files

This is the folder structure we set up for you:

```shell
/example
  index.html
  index.tsx       # test your component here in a demo app
  package.json
  tsconfig.json
/src
  index.tsx       # EDIT THIS
/test
  blah.test.tsx   # EDIT THIS
.gitignore
package.json
README.md         # EDIT THIS
tsconfig.json
```

#### React Testing Library

We do not set up `react-testing-library` for you yet, we welcome contributions and documentation on this.

### Rollup

TSDX uses [Rollup v1.x](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### Travis

_to be completed_

### Circle

_to be completed_

## Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Using the Playground

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**!

## Deploying the Playground

The Playground is just a simple [Parcel](https://parceljs.org) app, you can deploy it anywhere you would normally deploy that. Here are some guidelines for **manually** deploying with the Netlify CLI (`npm i -g netlify-cli`):

```bash
cd example # if not already in the example folder
npm run build # builds to dist
netlify deploy # deploy the dist folder
```

Alternatively, if you already have a git repo connected, you can set up continuous deployment with Netlify:

```bash
netlify init
# build command: yarn build && cd example && yarn && yarn build
# directory to deploy: example/dist
# pick yes for netlify.toml
```

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Including Styles

There are many ways to ship styles, including with CSS-in-JS. TSDX has no opinion on this, configure how you like.

For vanilla CSS, you can include it at the root directory and add it to the `files` section in your `package.json`, so that it can be imported separately by your users and run through their bundler's loader.

## Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).

## Usage with Lerna

When creating a new package with TSDX within a project set up with Lerna, you might encounter a `Cannot resolve dependency` error when trying to run the `example` project. To fix that you will need to make changes to the `package.json` file _inside the `example` directory_.

The problem is that due to the nature of how dependencies are installed in Lerna projects, the aliases in the example project's `package.json` might not point to the right place, as those dependencies might have been installed in the root of your Lerna project.

Change the `alias` to point to where those packages are actually installed. This depends on the directory structure of your Lerna project, so the actual path might be different from the diff below.

```diff
   "alias": {
-    "react": "../node_modules/react",
-    "react-dom": "../node_modules/react-dom"
+    "react": "../../../node_modules/react",
+    "react-dom": "../../../node_modules/react-dom"
   },
```

An alternative to fixing this problem would be to remove aliases altogether and define the dependencies referenced as aliases as dev dependencies instead. [However, that might cause other problems.](https://github.com/palmerhq/tsdx/issues/64)
