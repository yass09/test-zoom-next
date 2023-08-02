"use client";

import Image from "next/image";
import styles from "./ImageViewer.module.scss";
import { ImageViewerCursor } from "./ImageViewerCursor";
import { useEffect, useRef, useState } from "react";

export const ImageViewer = ({ imageData }) => {
  const { value: src, alt, label } = imageData;
  const imageRef = useRef();

  const [cursorPosition, setCursorPosition] = useState({});
  const [cursorBackgroundPosition, setCursorBackgroundPosition] = useState("");

  const getCursorBackground = (positionX, positionY) => {
    const { current: imageElement } = imageRef;
    let imagePercentageX = positionX - imageElement.offsetLeft;
    imagePercentageX = imagePercentageX * 100;
    imagePercentageX = imagePercentageX / imageElement.clientWidth;

    let imagePercentageY = positionY - imageElement.offsetTop;
    imagePercentageY = imagePercentageY * 100;
    imagePercentageY = imagePercentageY / imageElement.clientHeight;
    setCursorBackgroundPosition(`${imagePercentageX}% ${imagePercentageY}%`);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.addEventListener("mousemove", function (ev) {
      setCursorPosition({ positionX: ev.clientX, positionY: ev.clientY });
      getCursorBackground(ev.clientX, ev.clientY);
    });
  }, [setCursorPosition]);

  return (
    <>
      <h1 className="pageTitle">{label}</h1>
      <ImageViewerCursor
        position={cursorPosition}
        backgroundSrc={src}
        backgroundPosition={cursorBackgroundPosition}
      />
      <div className={styles.imageContainer}>
        <Image src={src} alt={alt} fill ref={imageRef} />
      </div>
    </>
  );
};
