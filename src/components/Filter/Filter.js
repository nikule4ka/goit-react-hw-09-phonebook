import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import * as contactsActions from '../../redux/contacts/contacts-action';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Filter() {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();

  const onChange = useCallback(
    e => dispatch(contactsActions.changeFilter(e.currentTarget.value)),
    [dispatch],
  );

  return (
    <Form.Label htmlFor="" className={s.filter__label}>
      Find contacts by name
      <Form.Control
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        required
      />
    </Form.Label>
  );
}

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
};
