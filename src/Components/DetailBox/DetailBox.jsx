import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

var DetailBoxStyle = {
  margin: '20px',
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
    fontWeight: 'Bold',
  },
  pos: {
    marginBottom: 12,
  },
  redColor: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  greenColor: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  greyColor: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  hrLine: {
    height: '1px',
    color: '#E8E8E8',
    backgroundColor: '#E8E8E8',
    border: 'none',
  },
});

export default function DetailBox(props) {
  const classes = useStyles();
  return (
    <div style={DetailBoxStyle}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {props.state.toUpperCase()}
          </Typography>
          <hr className={classes.hrLine} />
          <Typography className={classes.pos} color='textSecondary'>
            <Grid container>
              <Grid item sm={4} xs={4} className={classes.redColor}>
                CONFIRMED
                <br />
                {props.confirmed}
              </Grid>
              <Grid item sm={4} xs={4} className={classes.greenColor}>
                RECOVERED
                <br />
                {props.recovered}
              </Grid>
              <Grid item sm={4} xs={4} className={classes.greyColor}>
                DEATHS
                <br />
                {props.deaths}
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
      </Card>

    </div>
  );
}
