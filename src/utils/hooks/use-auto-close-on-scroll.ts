import {DependencyList, useEffect} from "react";

export const useAutoCloseOnScroll = (
  callback: () => void,
  dependencies: DependencyList
): void => {
  useEffect(() => {
    const handleScroll = () => {
      callback();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, dependencies);
};
