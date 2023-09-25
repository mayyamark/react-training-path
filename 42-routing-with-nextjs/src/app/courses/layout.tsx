interface CoursesLayoutProps {
  children: React.ReactNode
}

const CoursesLayout: React.FC<CoursesLayoutProps> = ({
  children,
}) => {
  return (
    <div>
      <h2>Courses page</h2>
      {children}
    </div>
  );
};

export default CoursesLayout;
