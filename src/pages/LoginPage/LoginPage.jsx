import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Label, Form } from 'pages/RegisterPage/RegisterPage.styled';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h2>Page Login</h2>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <input type="email" name="email" />
        </Label>
        <Label>
          Password
          <input type="password" name="password" />
        </Label>
        <button type="submit">Log In</button>
      </Form>
    </div>
  );
};
