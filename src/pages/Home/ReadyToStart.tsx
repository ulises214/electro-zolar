import LinkButton from '../../components/LinkButton';
import { Section } from '../../components/Section';

const ReadyToStart = () => {
  return (
    <Section color='blue' className='ready-to-start'>
      <h2 className='ready-to-start__title'>¿Listo para empezar?</h2>
      <LinkButton color='yellow' to='/'>
        Envía tu recivo de luz
      </LinkButton>
    </Section>
  );
};

export default ReadyToStart;
