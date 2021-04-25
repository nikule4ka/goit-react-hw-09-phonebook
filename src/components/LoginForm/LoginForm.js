import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import Container from '../Container';

import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const isValid = () => {
    if (email === '' || password === '') {
      return false;
    }
    return true;
  };

  return (
    <Container>
      <h2>Please, log in </h2>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            Email address
            <Form.Control
              value={email}
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            Email address
            <Form.Control
              value={password}
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Label>
        </Form.Group>
        <Button type="submit" disabled={!isValid()} variant="secondary" size="lg">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
