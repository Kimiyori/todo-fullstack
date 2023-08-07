import { useEffect, useRef } from 'react';

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const { target } = event;
      target && ref.current && !ref.current.contains(target as Node) && callback();
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [ref, callback]);

  return ref;
};
export default useOutsideClick;

