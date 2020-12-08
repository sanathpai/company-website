import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

// core components
import GridContainer from "components/Grid/GridContainer.js";

const images = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKrXEx90HrAUeHA62hvgamXahcaqBL7cdJg&usqp=CAU',
    title: 'Nitte University',
    width: '30%',
  },
  {
    url: 'data:image/png;base64,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',
    title: 'Harmonizer Solutions',
    width: '40%',
  },
  {
    url: 'data:image/png;base64,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',
    title: 'Google',
    width: '30%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 150,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <GridContainer>
        <div className={classes.root}>
          {images.map((image) => (
            <ButtonBase
              focusRipple
              key={image.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: image.width,
              }}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          ))}
        </div>
    </GridContainer>
  );
}
