import { useDeferredValue, useMemo } from 'react';

const numbers = [...new Array(200000).keys()];

interface ListProps {
  query: string;
}

const List: React.FC<ListProps> = ({ query }) => {
  const deferredQuery = useDeferredValue(query);

  const list = useMemo(() => (
    numbers
      .filter((i) => (
        deferredQuery.length === 0 || i.toString().startsWith(deferredQuery)
      ))
      .map(i => <p key={i}>{i}</p>)
  ), [deferredQuery]);
  
  return <div>{list}</div>;
}

export default List;
