import { Link } from 'react-router-dom';
interface ButtonProps {
  children: string;
  color: 'yellow' | 'blue';
  to: string;
}
const LinkButton = ({ children, color, to }: ButtonProps) => {
  return (
    <Link to={to} className={`link-button link-button-${color}`}>
      {children}
    </Link>
  );
};

export default LinkButton;
