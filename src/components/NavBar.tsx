import { Link } from 'react-router-dom';
interface NavLinkProps {
  href: string;
  title: string;
}
const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link to={href} className='navlink'>
      {title}
    </Link>
  );
};
// interface NavBarProps {}
const NavBar = () => {
  return (
    <nav id='bars_menu_nav' className='nav_menu__container'>
      <NavLink href='/' title='Inicio' />
      <NavLink href='/instalaciones' title='Instalaciones' />
      <NavLink href='/servicio' title='Servicio' />
    </nav>
  );
};

export default NavBar;
