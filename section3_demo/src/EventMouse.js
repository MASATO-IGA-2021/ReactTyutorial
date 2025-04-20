import { useState } from "react";
export default function EventMouse(before, after, alt) {
  const [current, setCurrent] = useState(before);
  const handleEnter = () => setCurrent(after);
  const handleLeave = () => setCurrent(before);
  return (
    <img
      src={current}
      alt={alt}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    />
  );
}
