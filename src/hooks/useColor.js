import { useState } from "react";

export default function useColor(initialColor) {
  const [selectedColor, setColor] = useState(initialColor);

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return [selectedColor, changeColor];
}
