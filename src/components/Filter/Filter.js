import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './Filter.module.css';
import * as contactsActions from '../../redux/contacts/contacts-action';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Filter = ({ value, onChange }) => (
  <Form.Label htmlFor="" className={s.filter__label}>
    Find contacts by name
    <Form.Control type="text" name="filter" value={value} onChange={onChange} required />
  </Form.Label>
);

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
