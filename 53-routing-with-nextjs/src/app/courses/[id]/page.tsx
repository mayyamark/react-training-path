import Link from 'next/link';

interface CoursePageProps {
  params: {
    id: string;
  }
}

const CoursePage: React.FC<CoursePageProps> = ({ params }) => {
  return (
    <div>
      <h2>
        Welcome to the {params.id.split('-').join(' ').toUpperCase()} course!
      </h2>

      <p>This is a great course. You&apos;re gonna love it!</p>

      <Link href='/courses'>See all courses</Link>
    </div>
  );
};

export default CoursePage;
