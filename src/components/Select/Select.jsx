"use client";

import styles from "./Select.module.scss";

export const Select = ({ options, onChangeHandler }) => {
  return (
    <div className={styles.selectContainer}>
      <select name="images" id="images" onChange={onChangeHandler}>
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
  );
};
