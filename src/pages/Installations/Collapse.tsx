import { Section } from '../../components/Section';
import installations, {
  Installation,
} from '../../assets/img/installations/installations';
import useMatchScreenSize from '../../hooks/useMatchScreenSize';
import { useMemo } from 'react';
interface CollapseItemProps {
  installation: Installation;
  keyNumber: number;
}
const installationImage = (image: string, name: string, ix: number) => (
  <img
    src={image}
    alt={`${name} #${ix}`}
    key={image}
    className='collapse__item__images__img'
  />
);
const CollapseItem = ({ installation, keyNumber }: CollapseItemProps) => {
  const isTabletOrHigher = useMatchScreenSize('768px', 'min');
  const shouldBeOpen = useMemo(() => {
    if (isTabletOrHigher) return true;

    return keyNumber < 4;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTabletOrHigher]);
  return (
    <details open={shouldBeOpen} className='collapse__item'>
      <summary className='collapse__item__title'>
        {installation.name}
      </summary>
      <div className='collapse__item__images'>
        {installation.images.map((i, ix) =>
          installationImage(i, installation.name, ix)
        )}
      </div>
    </details>
  );
};
const Collapse = () => {
  return (
    <Section color='blue' className='collapse'>
      {installations.map((i, ix) => (
        <CollapseItem installation={i} keyNumber={ix} key={ix} />
      ))}
    </Section>
  );
};

export default Collapse;
