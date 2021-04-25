import React, { useEffect } from 'react';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { getIsLoading } from '../redux/contacts/contacts-selectors';
import { fetchContacts } from '../redux/contacts/contacts-operations';

export default function ContactsView() {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && <Loader type="ThreeDots" color="#495939" height={50} width={50} />}
      <h1>Phonebook</h1>
      <ContactForm />

      <Filter />

      <h2>Contacts</h2>
      <ContactList />
    </Container>
  );
}
