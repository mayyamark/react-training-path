import { FormEvent, useState } from 'react';

interface Form {
  [key: string]: { 
    name: string;
    value: string;
    label: string;
    type: string;
    validate: (value: string) => boolean;
    isValid: boolean;
  }
}

const initialValue = {
  email: {
    name: 'email',
    value: '',
    label: 'Email address',
    type: 'email',
    validate: (value: string) => /\S+@\S+\.\S+/.test(value),
    isValid: true,
  },
  password: {
    name: 'password',
    value: '',
    label: 'Password',
    type: 'password',
    validate: (value: string) => value.trim().length > 6,
    isValid: true,
  }
};

const App = () => {
  const [form, setForm] = useState<Form>(initialValue);

  console.log("Controlled form re-rendered", { form });

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    console.log("Form was submitted!", { form });

    setForm(initialValue);
  }

  // Dynamic render is not recommended, since it's difficult to understand what happens
  // Sometimes it's better to write more code, which is more readable
  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(form).map((inputName) => (
        <div key={inputName}>
          <label htmlFor={inputName}>{form[inputName].label}</label>
          <input 
            type={form[inputName].type}
            value={form[inputName].value}
            onChange={(ev) => {
              const newForm = { ...form };
              newForm[inputName].value = ev.target.value;
              newForm[inputName].isValid = newForm[inputName].validate(ev.target.value);
              setForm(newForm);
            }}
          />
          {!form[inputName].isValid && <p>Invalid field</p>}
        </div>
      ))}
      <button type='submit'>Submit</button>
    </form>
  );
}

export default App;
