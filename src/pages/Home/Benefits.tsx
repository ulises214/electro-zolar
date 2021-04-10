import LinkButton from '../../components/LinkButton';
import { Section } from '../../components/Section';
import GlobeIcon from '../../assets/img/icons/globe.svg';
import DollarIcon from '../../assets/img/icons/dollar.svg';
import PlusIcon from '../../assets/img/icons/plus.svg';

interface BenefitItemProps {
  src: string;
  children: string;
  href?: string;
  title: string;
}
const BenefitItem = ({ src, children, title, href }: BenefitItemProps) => {
  return (
    <div className='benefits__item'>
      <img
        className='benefits__item__img'
        src={src}
        alt={`Beneficio sobre ${title}`}
      />
      <h2 className='benefits__item__title'>{title}</h2>
      <p className='benefits__item__text'>{children}</p>
      <LinkButton color='yellow' to={href ?? '/'}>
        Leer más
      </LinkButton>
    </div>
  );
};
const Benefits = () => {
  return (
    <Section color='blue' className='benefits'>
      <BenefitItem src={GlobeIcon} title='Calentamiento global' href='/'>
        El sistema fotovoltaico ayuda a reducir la emisión de gases con
        efecto invernadero.
      </BenefitItem>
      <BenefitItem src={DollarIcon} title='Ahorro económico' href='/'>
        El ahorro energético economico se verá reflejado con el paso del
        tiempo en las facturas.
      </BenefitItem>
      <BenefitItem src={PlusIcon} title='Disponibilidad global' href='/'>
        El sol brilla en todos los lugares del mundo, por lo tanto, si hay
        sol hay energía solar en mayor o menor medida.
      </BenefitItem>
    </Section>
  );
};
export default Benefits;
