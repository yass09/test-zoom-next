"use client";

import { useState } from "react";
import { Select } from "../Select/Select";
import { getSlugFromImagePath } from "../../helpers/slug.helper";
import Link from "next/link";
import styles from "./ImageSelector.module.scss";

export const ImageSelector = ({ imageListOptions }) => {
  const [currentValue, setCurrentValue] = useState("");
  const onChangeHandler = (e) => setCurrentValue(e.target.value);

  return (
    <>
      <Select
        options={imageListOptions}
        label="Pick an image from the dropdown list below"
        id="images"
        onChangeHandler={onChangeHandler}
      />
      {currentValue ? (
        <Link
          href={`/${getSlugFromImagePath(currentValue)}`}
          className={styles.imageLink}
          aria-disabled={!currentValue}
        >
          Go to image
        </Link>
      ) : (
        <button className={styles.imageLink} disabled>
          Go to image
        </button>
      )}
    </>
  );
};
