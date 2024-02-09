import {useState} from "react";

export const useInputFocus = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  return {isFocused, onFocus: handleFocus, onBlur: handleBlur};
};
