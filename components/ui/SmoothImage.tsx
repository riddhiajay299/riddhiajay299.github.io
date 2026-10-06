import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SmoothImageProps extends ImageProps {
  containerClassName?: string;
}

export default function SmoothImage({
  src,
  alt,
  className,
  containerClassName = "",
  onLoad,
  ...props
}: SmoothImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden w-full h-full ${containerClassName}`}>
      {/* Editorial aesthetic placeholder skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#F3ECE4] to-[#FAF8F5] bg-[length:200%_100%] animate-pulse z-0" />
      )}
      <Image
        src={src}
        alt={alt}
        className={`transition-all duration-1000 ease-out ${
          isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105"
        } ${className || ""}`}
        onLoad={(e) => {
          setIsLoaded(true);
          if (onLoad) {
            onLoad(e);
          }
        }}
        {...props}
      />
    </div>
  );
}

interface SmoothImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export function SmoothImg({
  src,
  alt,
  className,
  containerClassName = "",
  onLoad,
  ...props
}: SmoothImgProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden w-full h-full ${containerClassName}`}>
      {/* Editorial aesthetic placeholder skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#F3ECE4] to-[#FAF8F5] bg-[length:200%_100%] animate-pulse z-0" />
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-all duration-1000 ease-out ${
          isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105"
        } ${className || ""}`}
        onLoad={(e) => {
          setIsLoaded(true);
          if (onLoad) {
            onLoad(e);
          }
        }}
        {...props}
      />
    </div>
  );
}
