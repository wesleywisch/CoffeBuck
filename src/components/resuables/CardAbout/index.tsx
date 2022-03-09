import { CardAboutContainer } from './styles';

type CardAboutProps = {
  icon: string | React.ReactNode;
  title: string;
  description: string;
  align: 'left' | 'right';
  order: 1 | 2;
}

export function CardAbout({ icon, title, description, align, order }: CardAboutProps) {
  return (
    <CardAboutContainer align={align} order={order}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {icon}
    </CardAboutContainer>
  )
}