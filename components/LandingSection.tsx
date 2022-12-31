import React from 'react';
import { Typography, styled } from '@mui/material';

const PREFIX = 'LandingSection';
const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`
};
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {},
  [`&.${classes.content}`]: {}
}));

const LandingSection = () => {
  return (
    <Root className={classes.root}>
      <Typography className={classes.content}>LandingSection</Typography>
    </Root>
  );
};

export default LandingSection;
