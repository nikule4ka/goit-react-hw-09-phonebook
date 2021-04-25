import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import s from './UserMenu.module.css';
import defaultAvatar from './avatar.png';
import { getUserName } from '../../redux/auth/auth-selectors';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logOut } from '../../redux/auth/auth-operations';

export default function UserMenu() {
  const name = useSelector(getUserName);

  const dispatch = useDispatch();

  const onLogOut = useCallback(() => dispatch(logOut()), [dispatch]);

  return (
    <div>
      <img src={defaultAvatar} alt="" width="32" />
      <span className={s.welcome}>Welcome, {name}</span>
      <Button type="button" onClick={onLogOut} variant="outline-dark">
        Logout
      </Button>
    </div>
  );
}
