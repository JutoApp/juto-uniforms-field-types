import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { connectField } from 'uniforms';

const BetterCheckbox = ({ label, labelBefore, ...props }: any) => {
  const [checkboxVal, setCheckboxVal] = useState(props.initialValue || false);

  useEffect(() => props.onChange(checkboxVal), [checkboxVal, props]);

  return (
    <div
      className={classnames(
        'abc-checkbox',
        props.inputClassName,
        `checkbox${props.inline ? '-inline' : ''}`,
        'form-check'
      )}
    >
      <input
        className="form-check-input"
        checked={checkboxVal}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        onChange={() => {
          const newVal = !checkboxVal;
          setCheckboxVal(newVal);
          props.onChange(newVal);
        }}
        ref={props.inputRef}
        type="checkbox"
      />
      <label className="form-check-label" htmlFor={props.id}>
        {label}
      </label>
    </div>
  );
};

export default connectField(BetterCheckbox, { ensureValue: true });
