import { useForm } from 'react-hook-form';

const App = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <form noValidate onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' 
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required!'
            },
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Email is not valid!'
            },
          })} 
        />
        {errors.email && (
          <p>{errors.email.message?.toString()}</p>
        )}
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input 
          type='password' 
          required 
          {...register('password', {
            required: {
              value: true, 
              message: 'Password is required!'
            },
            minLength: {
              value: 6,
              message: 'Password should be min 6 characters!'
            }
          })}
        />
        {errors.password && (
          <p>{errors.password.message?.toString()}</p>
        )}
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default App;
