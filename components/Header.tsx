import React from 'react';
import { styled, AppBar, IconButton, Toolbar, alpha } from '@mui/material';
import { Sort as SortIcon } from '@mui/icons-material';

const PREFIX = 'Header';
const classes = {
  root: `${PREFIX}-root`,
  appbar: `${PREFIX}-appbar`,
  icon: `${PREFIX}-icon`,
  appbarTitle: `${PREFIX}-appbarTitle`,
  appbarWrapper: `${PREFIX}-appbarWrapper`,
  titleSpanText: `${PREFIX}-titleSpanText`
};
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.appbar}`]: {
    // background: 'none',
    color: '#fff',
    backgroundColor: alpha('#000', 0.5)
  },
  [`& .${classes.icon}`]: {
    color: '#fff',
    fontSize: '2.5rem'
  },
  [`& .${classes.appbarTitle}`]: {
    flexGrow: '1',
    fontSize: '1.8rem',
    fontFamily: 'Amatic SC',
    letterSpacing: '.3rem'
  },
  [`& .${classes.appbarWrapper}`]: {
    width: '80%',
    margin: '0 auto'
  },
  [`& .${classes.titleSpanText}`]: {
    color: '#E6007A',
    padding: '0 .5rem 0 1rem',
    marginRight: '.5rem',
    backgroundColor: '#fff'
  }
}));

const Header = () => {
  return (
    <Root
      className={classes.root}
      style={
        {
          //   wordSpacing
        }
      }
    >
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            <span className={classes.titleSpanText}>Taoyuan</span> tourism
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default Header;
