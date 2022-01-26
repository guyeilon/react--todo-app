import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Link, useNavigate } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: '#fafafa',
    textDecoration: 'none',
  },
});

const NavBar = () => {
  const classes = useStyles();
  const state = useSelector(state => state);
  const auth = useSelector(state => state.auth);
  console.log(state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelSignOut = () => {
    dispatch(signOut());
    navigate('/signin');
  };
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.root} variant='h4'>
            <Link className={classes.linkStyle} to='/'>
              toDoApp
            </Link>
          </Typography>
          {auth._id ? (
            <>
              <Typography className={classes.root} variant='subtitle2'>
                Logged in as {auth.name}
              </Typography>
              <Button color='inherit' onClick={() => handelSignOut()}>
                SignOut
              </Button>
            </>
          ) : (
            <>
              <Button color='inherit'>
                <Link className={classes.linkStyle} to='/signin'>
                  SignIn
                </Link>
              </Button>

              <Button color='inherit'>
                <Link className={classes.linkStyle} to='/signup'>
                  SignUp
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
