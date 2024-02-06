import { useState } from "react";

export const useInputFocus = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    console.log('Input в фокусе');
  };

  const handleBlur = () => {
    setIsFocused(false);
    console.log('Input потерял фокус');
  };

  return { isFocused, onFocus: handleFocus, onBlur: handleBlur };
};
