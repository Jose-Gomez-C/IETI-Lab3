import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: "center",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
            Task name:  {props.tareaN}
        </Typography>
        <Typography className={classes.pos} color="h7">
            Status: {props.status}
        </Typography>
        <Typography variant="h7" component="p">
        {bull} Date : {props.date}
        </Typography>
        <Typography variant="h7" component="p">
            Responsible : {props.responsible}
        </Typography>
      </CardContent>
    </Card>
  );
}