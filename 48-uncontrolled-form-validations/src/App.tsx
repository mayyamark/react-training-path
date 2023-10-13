import { FormEvent, useRef } from 'react';
import styles from './App.module.css';

const App = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  console.log('Uncontrolled form re-rendered', { emailRef, passwordRef })

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const form = ev.target as HTMLFormElement;
    form.classList.add(styles.submitted);

    const firstInvalidField = form.querySelector(
      ':invalid'
      ) as HTMLInputElement;
      firstInvalidField?.focus();

    const isValid = form.checkValidity();

    if (isValid && emailRef.current && passwordRef.current) {
      console.log('Form is valid and was submitted!', 
        { emailRef, passwordRef }
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor='email'>Email</label>
        <input 
          type='email' 
          name='email' 
          required
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          ref={emailRef} 
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input 
          type='password' 
          name='password' 
          required 
          ref={passwordRef} 
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default App;
