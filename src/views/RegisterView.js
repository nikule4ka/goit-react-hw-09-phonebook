import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import Container from '../components/Container';
import { Button, Form, FormLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  form: {
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',

    marginBottom: 15,
  },
};

export default function Component() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'email':
        setEmail(value);
        return;
      case 'password':
        setPassword(value);
        return;

      default:
        return alert(`Hey, something wrong`);
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  const isValid = () => {
    if (name === '' || email === '' || password === '') {
      return false;
    }
    return true;
  };

  return (
    <Container>
      <h3>Registration</h3>

      <Form autoComplete="off" style={styles.form} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <FormLabel>
            Name
            <Form.Control
              value={name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter name"
            />
          </FormLabel>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
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

        <Form.Group>
          <Form.Label>
            Password
            <Form.Control
              value={password}
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Label>
        </Form.Group>

        <Button disabled={!isValid()} type="submit" variant="secondary" size="lg">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
