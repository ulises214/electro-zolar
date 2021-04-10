import Promocion from '../../assets/img/promocion del mes.jpg';
import LinkButton from '../../components/LinkButton';
const Presentation = () => (
  <section className='presentation section section__white'>
    <div className='presentation__info'>
      <h1>Energía solar al alcance de todos</h1>
      <p>
        El sol es la fuente de energía más prometedora, por ello ponemos
        productos de <b>calidad</b> y <b>durabilidad</b> para obten r
        beneficio y así la máxima energía eléctrica procesada por paneles
        de Electro Zolar.
      </p>
      <LinkButton to='servicio' color='yellow'>
        ENVÍA TU RECIBO DE LUZ
      </LinkButton>
    </div>
    <img
      className='presentation__image'
      src={Promocion}
      alt='Promoción del mes'
    />
  </section>
);
export default Presentation;
