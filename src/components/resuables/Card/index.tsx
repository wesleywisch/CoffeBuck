import { CardContainer } from './styles';

type CardProps = {
  icon: string | React.ReactNode;
  title: string;
  description: string;
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <CardContainer>
      {icon}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </CardContainer>
  );
}