import { useFormik } from "formik";

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => console.log(values),
    validate: ({ email, password }) => {
      let errors = { email: '', password: '' };
      if (!email) {
        errors = { ...errors, email: 'Email is required!' };
      } else if (!/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(email)) {
        errors = { ...errors, email: 'Email is not valid!' };
      }
      if (!password) {
        errors = { ...errors, password: 'Password is required!' };
      } else if (password.length < 6) {
        errors = { ...errors, password: 'Password should be min 6 characters!' };
      }
      return errors;
    }
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && <p>{formik.errors.email}</p>}
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input 
            id='password'
            name='password'
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && <p>{formik.errors.password}</p>}
        </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default App;
