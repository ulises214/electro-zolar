import MailIcon from '../assets/img/icons/mail.svg';
import MobileIcon from '../assets/img/icons/mobile.svg';
import PhoneIcon from '../assets/img/icons/phone.svg';
import FacebookIcon from '../assets/img/icons/facebook.svg';
import Logo from './Logo';
const FooterNetworkItem = ({
  src,
  title,
  href,
}: {
  src: string;
  title: string;
  href: string;
}) => {
  return (
    <a
      className='footer__link'
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      <img className='footer__link__img' src={src} alt='Network link' />
      <p className='footer__link__p'>{title}</p>
    </a>
  );
};
const Footer = () => {
  return (
    <footer className='section section__white'>
      <div className='networks'>
        <Logo />
        <h3>Contáctanos</h3>
        <FooterNetworkItem
          src={MailIcon}
          title='electrozolar@hotmail.com'
          href='mailto:electrozolar@hotmail.com'
        />
        <FooterNetworkItem
          src={MobileIcon}
          title='312 157 2677'
          href='tel:3121572677'
        />
        <FooterNetworkItem
          src={PhoneIcon}
          title='312 311 9644'
          href='tel:3123119644'
        />
        <FooterNetworkItem
          src={FacebookIcon}
          title='@ElectroZolar'
          href='https://www.facebook.com/ElectroZolar'
        />
      </div>
    </footer>
  );
};

export default Footer;
