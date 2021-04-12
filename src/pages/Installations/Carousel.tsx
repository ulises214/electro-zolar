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
          <div
            key={i.name}
            className='carousel__container__img'
            style={{
              backgroundImage: `url(${getRandomElements(i.images, 1)[0]}`,
            }}
            // alt={i.name}
          ></div>
        ))}
      </div>
    </Section>
  );
};

export default Carousel;
