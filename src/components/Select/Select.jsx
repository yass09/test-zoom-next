"use client";

import styles from "./Select.module.scss";

export const Select = ({ options, onChangeHandler, label, id }) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <div className={styles.selectContainer}>
        <select name={id} id={id} onChange={onChangeHandler} autoComplete="off">
          {options.map(({ value, label, selected, disabled }) => (
            <option
              value={value || label}
              key={`select-option-${value}`}
              selected={selected}
              disabled={disabled}
            >
              {label || value}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
