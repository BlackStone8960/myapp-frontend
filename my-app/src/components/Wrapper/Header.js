import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Header.scss';

const Header = () => {
  const [user, setUser] = useState(null); // Manage here with Redux and backend code later.

  return (
    <AppBar position="static">
      <Toolbar className="header-toolbar">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <Typography variant="h6">
            Bridge
          </Typography>
        </Link>
        {
          user ? (
            <Button color="inherit">Logout</Button>
          ) : (
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          )
        }
      </Toolbar>
    </AppBar>
  )
}

export default Header
