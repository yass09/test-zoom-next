"use client";

import Image from "next/image";
import styles from "./ImageViewer.module.scss";
import { ImageViewerCursor } from "./ImageViewerCursor";
import { useEffect, useRef, useState } from "react";

export const ImageViewer = ({ imageData }) => {
  const { value: src, alt, label } = imageData;
  const imageRef = useRef();
  const [imageElement, setImageElement] = useState(null);

  useEffect(() => {
    setImageElement(imageRef.current);
  }, [imageRef]);

  return (
    <>
      <h1 className="pageTitle">{label}</h1>
      <div className={styles.imageContainer}>
        <ImageViewerCursor backgroundSrc={src} imageElement={imageElement} />
        <Image src={src} alt={alt} fill ref={imageRef} />
      </div>
    </>
  );
};
