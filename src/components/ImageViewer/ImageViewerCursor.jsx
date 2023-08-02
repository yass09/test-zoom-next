"use client";

import styles from "./ImageViewer.module.scss";

export const ImageViewerCursor = ({
  position,
  backgroundSrc,
  backgroundPosition,
}) => {
  const { positionX, positionY } = position;
  return (
    <div
      className={styles.imageViewerCursor}
      style={{
        left: `${positionX}px`,
        top: `${positionY}px`,
        backgroundImage: `url(${backgroundSrc})`,
        backgroundPosition: backgroundPosition,
      }}
    />
  );
};
