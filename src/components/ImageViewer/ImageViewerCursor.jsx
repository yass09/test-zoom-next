"use client";

import { useEffect, useState } from "react";
import styles from "./ImageViewer.module.scss";

export const ImageViewerCursor = ({ backgroundSrc, imageElement }) => {
  const [cursorPosition, setCursorPosition] = useState({
    positionX: 0,
    positionY: 0,
  });
  const [cursorBackgroundPosition, setCursorBackgroundPosition] = useState("");

  useEffect(() => {
    const getCursorBackground = (e) => {
      const { clientX, clientY } = e;
      let imagePercentageX = clientX - imageElement.offsetLeft;
      imagePercentageX = imagePercentageX * 100;
      imagePercentageX = imagePercentageX / imageElement.clientWidth;

      let imagePercentageY = clientY - imageElement.offsetTop;
      imagePercentageY = imagePercentageY * 100;
      imagePercentageY = imagePercentageY / imageElement.clientHeight;
      setCursorBackgroundPosition(`${imagePercentageX}% ${imagePercentageY}%`);
    };
    window.addEventListener("mousemove", getCursorBackground);
    return () => window.removeEventListener("mousemove", getCursorBackground);
  });

  const placeCursor = (e) => {
    setCursorPosition({ positionX: e.clientX, positionY: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", placeCursor);
    return () => window.removeEventListener("mousemove", placeCursor);
  });

  const { positionX, positionY } = cursorPosition;
  return (
    <div
      className={styles.imageViewerCursor}
      style={{
        left: `${positionX}px`,
        top: `${positionY}px`,
        backgroundImage: `url(${backgroundSrc})`,
        ...(cursorBackgroundPosition && {
          backgroundPosition: cursorBackgroundPosition,
        }),
      }}
    />
  );
};
