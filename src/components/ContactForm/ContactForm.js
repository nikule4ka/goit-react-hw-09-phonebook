import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';

import s from './ContactForm.module.css';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactForm() {
  const [newContact, setNewContact] = useState({ name: '', number: '' });

  const allContacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setNewContact({ ...newContact, [name]: value });
    },
    [newContact],
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      const existContact = allContacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
      );

      if (existContact) {
        return alert(`${existContact.name} is already in contacts`);
      }
      dispatch(addContact(newContact));
      setNewContact({ name: '', number: '' });
    },
    [allContacts, dispatch, newContact],
  );

  return (
    <Form onSubmit={handleSubmit} className={s.form}>
      <Form.Group>
        <Form.Label>
          Name
          <Form.Control
            type="text"
            name="name"
            value={newContact.name}
            onChange={handleChange}
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
            value={newContact.number}
            onChange={handleChange}
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
