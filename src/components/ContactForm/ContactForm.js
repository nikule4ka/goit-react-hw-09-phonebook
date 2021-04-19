import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';

import PropTypes from 'prop-types';

import s from './ContactForm.module.css';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static ptopTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  hanldeChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.props.contacts);
    const existContact = this.props.contacts.find(
      newContact => newContact.name.toLowerCase() === this.state.name.toLowerCase(),
    );

    if (existContact) {
      return alert(`${existContact.name} is already in contacts`);
    }

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} className={s.form}>
        <Form.Group>
          <Form.Label>
            Name
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={this.hanldeChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              placeholder="Name..."
              required
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Number
            <Form.Control
              type="tel"
              name="number"
              value={number}
              onChange={this.hanldeChange}
              placeholder="Phone..."
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
            />
          </Form.Label>
        </Form.Group>
        <Button type="submit" variant="outline-dark">
          Add contact
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(contactsOperations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
