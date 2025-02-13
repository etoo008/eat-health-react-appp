import React from 'react';

export default function Image({ src, alt = "", className = "" }) {
  return (
    <img src={src} alt={alt} className={`width-full height-auto ${className}`} />
  );
}