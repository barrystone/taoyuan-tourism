import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography, styled, alpha } from '@mui/material';
import { Image as ImageIcon } from '@mui/icons-material';

const PREFIX = 'InfoCard';
const classes = {
  root: `${PREFIX}-root`,
  card: `${PREFIX}-card`,
  media: `${PREFIX}-media`,
  title: `${PREFIX}-title`,
  desc: `${PREFIX}-desc`,
  button: `${PREFIX}-button`
};
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.card}`]: {
    maxWidth: 350,
    minHeight: 600,
    background: alpha('#000', 0.5),
    fontFamily: 'Amatic SC',
    paddingBottom: '.5rem',
    margin: '1rem',
    position: 'relative'
  },
  [`& .${classes.media}`]: {
    height: 340
  },
  [`& .${classes.title}`]: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#fff'
  },
  [`& .${classes.desc}`]: {
    fontSize: '1.1rem',
    color: '#ddd'
  },
  [`& .${classes.button}`]: {
    fontSize: '.8rem',
    color: '#ddd',
    border: '0.05rem #ddd solid',
    padding: '.2rem 1rem',
    marginTop: '-.5rem',
    borderRadius: '0',
    position: 'absolute',
    bottom: '1rem'
  }
}));

interface Props {
  info: { [name: string]: string };
}

export default function InfoCard({ info }: Props) {
  return (
    <Root className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={info.image}
          className={classes.media}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h1"
            component="div"
            className={classes.title}
          >
            {info.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={classes.desc}
          >
            {info.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            endIcon={<ImageIcon />}
            className={classes.button}
          >
            More
          </Button>
        </CardActions>
      </Card>
    </Root>
  );
}
