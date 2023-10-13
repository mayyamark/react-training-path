import { FormEvent, useState } from 'react';

const initialValue = {
  email: {
    value: '',
    errorMessage: '',
  },
  password: {
    value: '',
    errorMessage: '',
  }
};

const App = () => {
  const [form, setForm] = useState(initialValue);

  console.log('Controlled form re-rendered', { form });

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    console.log('Form was submitted!', { form });

    setForm(initialValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Email</label>
        <input 
          type='email'
          value={form.email.value}
          onChange={(ev) => {
            const newForm = { ...form };
            newForm.email.value = ev.target.value;

            if (ev.target.value.length === 0) {
              newForm.email.errorMessage = 'Email is required!';
            } else if (!/\S+@\S+\.\S+/.test(ev.target.value)) {
              newForm.email.errorMessage = 'Invalid email!';
            } else {
              newForm.email.errorMessage = '';
            }

            setForm(newForm);
          }}
        />
        {form.email.errorMessage && <p>{form.email.errorMessage}</p>}
      </div>

      <div>
        <label htmlFor='password'>Password</label>
        <input 
          type='password'
          value={form.password.value}
          onChange={(ev) => {
            const newForm = { ...form };
            newForm.password.value = ev.target.value;

            if (ev.target.value.length === 0) {
              newForm.password.errorMessage = 'Password is required!';
            } else if (ev.target.value.length < 6) {
              newForm.password.errorMessage = 'Password is should be min 6 characters!';
            } else {
              newForm.password.errorMessage = '';
            }

            setForm(newForm);
          }}
        />
        {form.password.errorMessage && <p>{form.password.errorMessage}</p>}
      </div>

      <button 
        type='submit' 
        disabled={!!(form.email.errorMessage || form.password.errorMessage)}
      >
        Submit
      </button>
    </form>
  );
};

export default App;