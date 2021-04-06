import { useEffect, useState } from 'react';
import { ScreenBreakPoints } from '../helpers/types';

function useMatchScreenSize(
  size: ScreenBreakPoints,
  breakLine: 'min' | 'max'
) {
  const [match, setMatch] = useState(false);

  const handleChange = (e: MediaQueryListEvent) => setMatch(e.matches);

  useEffect(() => {
    const media = window.matchMedia(`(${breakLine}-width: ${size})`);
    media.addEventListener('change', handleChange);
    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, [breakLine, size]);
  useEffect(() => {
    const media = window.matchMedia(`(${breakLine}-width: ${size})`);
    setMatch(media.matches);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return match;
}
export default useMatchScreenSize;
