import { useMemo } from 'react';

const numbers = [...new Array(200000).keys()];

interface ListProps {
  query: string;
}

const List: React.FC<ListProps> = ({ query }) => {
  const list = useMemo(() => (
    numbers
      .filter((i) => (
        query.length === 0 || i.toString().startsWith(query)
      ))
      .map(i => <p key={i}>{i}</p>)
  ), [query]);
  
  return <div>{list}</div>;
}

export default List;
