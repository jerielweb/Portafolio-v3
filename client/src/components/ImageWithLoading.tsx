"use client";

import { useState, useEffect, useRef } from "react";
import { Loading } from "./icons";

interface LoadingImgProps {
  src: string;
  alt: string;
  className?: string;
  Rounded: boolean;
}

export default function ImageWithLoading({
  src,
  alt,
  className,
  Rounded,
}: LoadingImgProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, [src]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className="relative flex items-center justify-center">
      {!imageLoaded && !imageError && (
        <div className={
            Rounded === true
            ? "absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-xl z-10"
            : "absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-full z-10"
        }>
          <Loading className="size-20 animate-loading" fill="rgba(200, 124, 255, 1)" />
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  );
}
