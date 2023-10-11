import { FormEvent, useRef } from 'react';

const App = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  console.log('Uncontrolled form re-rendered', { emailRef, passwordRef })

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (emailRef.current && passwordRef.current) {
      console.log('Form was submitted!', { 
        emailRef, passwordRef 
      });

      emailRef.current.value = '';
      passwordRef.current.value = '';
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' ref={emailRef} />
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
