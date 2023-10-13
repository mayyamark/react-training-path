import { PropsWithChildren } from 'react';

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>
}

export default Card;
