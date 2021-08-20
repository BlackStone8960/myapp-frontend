import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import './ForgotPassword.scss';

const ForgotPassword = () => {
  return (
    <div>
      <form className="password-wrapper">
        <div className="input-wrapper">
          <InputLabel htmlfor="curtrent-password">Current Password</InputLabel>
          <Input id="curtrent-password" />
        </div>
        <div className="input-wrapper">
          <InputLabel htmlfor="new-password">New Password</InputLabel>
          <Input id="new-password" />
        </div>
        <div className="input-wrapper">
          <InputLabel htmlfor="confirm-password">Confirm Password</InputLabel>
          <Input id="confirm-password" />
        </div>
        <Button variant="contained" color="primary">Send</Button>
      </form>
    </div>
  )
}

export default ForgotPassword
