import ElectroZolarLogo from '../assets/img/logo.svg';
const Logo = () => {
  return (
    <a className='logo' href={process.env.PUBLIC_URL + '/'}>
      <img src={ElectroZolarLogo} alt='Logo electrozolar' />
      <span>Electro</span>
      <span>Zolar</span>
    </a>
  );
};

export default Logo;
