import { FormEvent, useState } from 'react';

const App = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  console.log('Controlled form re-rendered', { form });

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    console.log('Form was submitted!', { form });

    setForm({
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor='email'>Email</label>
          <input 
            type='email'
            value={form.email}
            onChange={(ev) => {
              const newForm = { ...form };
              newForm.email = ev.target.value;
              setForm(newForm);
            }}
          />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input 
            type='password'
            value={form.password}
            onChange={(ev) => {
              const newForm = { ...form };
              newForm.password = ev.target.value;
              setForm(newForm);
            }}
          />
        </div>

      <button 
        type='submit' 
        disabled={!!(form.email || form.password)}
      >
        Submit
      </button>
    </form>
  );
};

export default App;
