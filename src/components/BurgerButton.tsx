import { useEffect } from 'react';
import { useLocation } from 'react-router';
import BarsIcon from '../assets/img/icons/bars.svg';
import TimesIcon from '../assets/img/icons/times.svg';

interface BurgerButtonProps {
  onClick: (arg0: boolean) => void;
  isOpen: boolean;
}
const BurgerButton = ({ onClick, isOpen }: BurgerButtonProps) => {
  const handleClick = () => {
    onClick(!isOpen);
  };
  const location = useLocation();
  useEffect(() => {
    onClick(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <img
      onClick={handleClick}
      className='burger_button'
      src={isOpen ? TimesIcon : BarsIcon}
      alt='Toggle Menu'
    />
  );
};

export default BurgerButton;
