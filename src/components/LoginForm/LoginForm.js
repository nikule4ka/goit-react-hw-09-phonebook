import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import Container from '../Container';

import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginView extends Component {
  state = {
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
    this.props.onLogin(this.state);
    this.setState({ email: '', password: '' });
  };

  isValid = () => {
    const { email, password } = this.state;
    if (email === '' || password === '') {
      return false;
    }
    return true;
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <h2>Please, log in </h2>
        <Form onSubmit={this.handleSubmit} autoComplete="off">
          <Form.Group controlId="formBasicEmail">
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

          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              Email address
              <Form.Control
                value={password}
                onChange={this.handleChange}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Label>
          </Form.Group>
          <Button type="submit" disabled={!this.isValid()} variant="secondary" size="lg">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
