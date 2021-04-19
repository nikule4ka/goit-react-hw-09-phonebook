import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsSuccess,
  addContactsRequest,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contacts-action';
import axios from 'axios';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact = ({ name, number }) => async dispatch => {
  const contact = { name, number };

  dispatch(addContactsRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactsSuccess(data));
  } catch (error) {
    dispatch(addContactsError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactsRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactsSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactsError(error.message));
  }
};

export { fetchContacts, addContact, deleteContact };
