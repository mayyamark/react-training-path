import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <h2>It looks like you&apos;re lost...</h2>
      <Link href='/'>Go to the home page</Link>
    </div>
  );
};

export default NotFound;
