import installations from '../../assets/img/installations/installations';
import { Section } from '../../components/Section';
import { getRandomElements } from '../../utils/array';

const Carousel = () => {
  const instalationsExmaple = getRandomElements(installations, 6);
  return (
    <Section color='white' className='carousel'>
      <h1>Nuestro trabajo</h1>
      <div className='carousel__container'>
        {instalationsExmaple.map((i) => (
          <img
            key={i.name}
            className='carousel__container__img'
            src={getRandomElements(i.images, 1)[0]}
            // style={{
            //   backgroundImage: `url(${}`,
            // }}
            alt={i.name}
          />
        ))}
      </div>
    </Section>
  );
};

export default Carousel;
