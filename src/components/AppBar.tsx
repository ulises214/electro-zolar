import { useEffect, useState } from 'react';
import useMatchScreenSize from '../hooks/useMatchScreenSize';

import BurgerButton from './BurgerButton';
import Logo from './Logo';
import NavBar from './NavBar';

const AppBar = () => {
  const isTabletOrLower = useMatchScreenSize('1024px', 'max');
  const [showNavBar, setShowNavBar] = useState(true);

  const toggleShowNavBar = (show: boolean) => setShowNavBar(show);
  useEffect(() => {
    setShowNavBar(!isTabletOrLower);
  }, [isTabletOrLower]);

  return (
    <header>
      <Logo />
      {isTabletOrLower && (
        <BurgerButton onClick={toggleShowNavBar} isOpen={showNavBar} />
      )}
      {showNavBar && <NavBar />}
    </header>
  );
};

export default AppBar;
