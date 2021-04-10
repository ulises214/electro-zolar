interface SectionProps {
  color: 'white' | 'blue';
  children: React.ReactNode;
  className: string;
}
export const Section = ({ color, children, className }: SectionProps) => {
  return (
    <section className={`${className} section section__${color}`}>
      {children}
    </section>
  );
};
