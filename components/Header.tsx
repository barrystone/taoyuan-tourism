import React, { useState, useEffect } from 'react';
import {
  styled,
  AppBar,
  IconButton,
  Toolbar,
  alpha,
  Grid,
  Collapse
} from '@mui/material';
import {
  Sort as SortIcon,
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';

const PREFIX = 'Header';
const classes = {
  root: `${PREFIX}-root`,
  appbar: `${PREFIX}-appbar`,
  sortIcon: `${PREFIX}-sortIcon`,
  appbarTitle: `${PREFIX}-appbarTitle`,
  appbarWrapper: `${PREFIX}-appbarWrapper`,
  SpanStyleAppbarText: `${PREFIX}-SpanStyleAppbarText`,
  SpanStyleH1Text: `${PREFIX}-SpanStyleH1Text`,
  h1Title: `${PREFIX}-h1Title`,
  godownIcon: `${PREFIX}-godownIcon`
};
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Amatic SC'
  },
  [`& .${classes.appbar}`]: {
    color: '#fff',
    backgroundColor: alpha('#000', 1)
  },
  [`& .${classes.sortIcon}`]: {
    color: '#fff',
    fontSize: '2.5rem'
  },
  [`& .${classes.appbarTitle}`]: {
    flexGrow: '1',
    fontSize: '1.8rem',
    letterSpacing: '.3rem'
  },
  [`& .${classes.appbarWrapper}`]: {
    width: '80%',
    margin: '0 auto'
  },
  [`& .${classes.SpanStyleAppbarText}`]: {
    color: '#E6007A',
    padding: '0 .5rem 0 .8rem',
    backgroundColor: '#fff',
    marginRight: '.5rem'
  },
  [`& .${classes.SpanStyleH1Text}`]: {
    color: '#E6007A',
    padding: '0 1rem',
    backgroundColor: '#fff',
    borderRadius: '1rem'
  },
  [`& .${classes.h1Title}`]: {
    textAlign: 'center',
    fontSize: '5rem',
    backgroundColor: alpha('#000', 0.5),
    padding: '0 1rem',
    borderRadius: '1rem',
    marginBottom: '2rem',
    transform: 'translate(0,2rem)'
  },
  [`& .${classes.godownIcon}`]: {
    color: '#E6007A',
    fontSize: '3rem',
    backgroundColor: '#fff',
    borderRadius: '50%',
    transform: 'translate(0,2rem)'
  }
}));

const Header = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => setChecked(true), []);

  return (
    <Root className={classes.root} style={{}}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            <span className={classes.SpanStyleAppbarText}>Taoyuan</span> tourism
          </h1>
          <IconButton>
            <SortIcon className={classes.sortIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        // style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedSize={50}
      >
        <Grid container alignItems="center" direction="column">
          <h1 className={classes.h1Title}>
            Welcome to
            <br /> <span className={classes.SpanStyleH1Text}>Taoyuan</span> City
          </h1>
          <IconButton>
            <ExpandMoreIcon className={classes.godownIcon} />
          </IconButton>
        </Grid>
      </Collapse>
    </Root>
  );
};

export default Header;
