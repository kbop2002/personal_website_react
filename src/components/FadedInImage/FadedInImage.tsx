import React, { useState, useEffect, useRef } from "react";
import './FadedInImage.css'; 

const FadeInImage = ({ src, alt , height, width, top, left}) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after the image becomes visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the image is in the viewport
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={`fade-in-image ${isVisible ? "visible" : ""}`}
      style={{position:'relative', top:top, left:left}}
    />
  );
};

export default FadeInImage;
