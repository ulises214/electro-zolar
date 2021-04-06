interface NavLinkProps {
  href: string;
  title: string;
}
const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <a href={process.env.PUBLIC_URL + href} className='navlink'>
      {title}
    </a>
  );
};
// interface NavBarProps {}
const NavBar = () => {
  return (
    <nav id='bars_menu_nav' className='nav_menu__container'>
      <NavLink href='/instalaciones.html' title='Instalaciones' />
      <NavLink href='/servicio.html' title='Servicio' />
    </nav>
  );
};

export default NavBar;
