import { useEffect } from 'react';

export default function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: (event: MouseEvent | TouchEvent) => void,
) {
  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (!ref.current?.contains(e.target as Node | null)) {
        callback(e);
      }
    };
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [ref, callback]);
}