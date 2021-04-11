interface SectionProps {
  color: 'white' | 'blue';
  children: React.ReactNode;
  className?: string;
}
export const Section = ({ color, children, className }: SectionProps) => {
  return (
    <section className={`section section__${color}`}>
      <div className={`section__content-container ${className}`}>
        {children}
      </div>
    </section>
  );
};
