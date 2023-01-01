import React from 'react';
import { Typography, styled } from '@mui/material';
import InfoCard from './InfoCard';
import infos from '../data/infos';

const PREFIX = 'MainInfoSection';
const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`
};
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    minHeight: '100vh',
    backgroundImage: `url(${'/assets/taoyuan-tourism-bg-2.jpeg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  [`& .${classes.content}`]: {}
}));

const MainInfoSection = () => {
  console.log('infos', infos);
  return (
    <Root className={classes.root}>
      {infos.map((info, index) => (
        <InfoCard key={index} info={info} />
      ))}
    </Root>
  );
};

export default MainInfoSection;
