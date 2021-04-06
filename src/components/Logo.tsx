import { Link } from 'react-router-dom';

import ElectroZolarLogo from '../assets/img/logo.svg';
const Logo = () => {
  return (
    <Link className='logo' to={'/'}>
      <img src={ElectroZolarLogo} alt='Logo electrozolar' />
      <span>Electro</span>
      <span>Zolar</span>
    </Link>
  );
};

export default Logo;
