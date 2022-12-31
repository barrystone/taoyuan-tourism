import React from 'react';
import { Typography, styled, CssBaseline } from '@mui/material';

const PREFIX = 'LandingSection';
const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`
};
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    minHeight: '100vh',
    backgroundImage: `url(${'/assets/taoyuan-tourism-bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  [`&.${classes.content}`]: {}
}));

const LandingSection = () => {
  return (
    <Root className={classes.root}>
      {/* Avoidind any padding or margin */}
      <CssBaseline />
      {/* <Typography className={classes.content}>
        Photo by{' '}
        <a href="https://unsplash.com/@angelalo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Angela Lo
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/photos/jp9xn6auPOU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </Typography> */}
    </Root>
  );
};

export default LandingSection;
