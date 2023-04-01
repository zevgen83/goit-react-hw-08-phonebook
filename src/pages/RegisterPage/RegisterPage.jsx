import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Label, Form } from './RegisterPage.styled';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Page Registration</h2>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </Label>
        <Label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </Label>
        <button type="submit">Register</button>
      </Form>
    </div>
  );
};
