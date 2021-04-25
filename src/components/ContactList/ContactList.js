import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

import s from './ContactList.module.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContacts = useCallback(contactId => dispatch(deleteContact(contactId)), [
    dispatch,
  ]);

  return (
    <>
      <ul className={s.ContactList}>
        {contacts.length ? (
          contacts.map(({ id, name, number }) => (
            <li key={id} id={id} className={s.ContactList__item}>
              <p className={s.ContactList__text}>{name}:</p>
              <p className={s.ContactList__text}>{number}</p>

              <Button variant="outline-dark" onClick={() => onDeleteContacts(id)}>
                Delete
              </Button>
            </li>
          ))
        ) : (
          <p>No contacts found</p>
        )}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
