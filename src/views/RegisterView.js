import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../redux/auth/auth-operations';
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

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  isValid = () => {
    const { name, email, password } = this.state;
    if (name === '' || email === '' || password === '') {
      return false;
    }
    return true;
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Container>
        <h3>Registration</h3>

        <Form autoComplete="off" style={styles.form} onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <FormLabel>
              Name
              <Form.Control
                value={name}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Label>
          </Form.Group>

          <Button disabled={!this.isValid()} type="submit" variant="secondary" size="lg">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
