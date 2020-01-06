import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from './assets/logo.png';
import CustomizedInputBase from './appBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { CardMedia } from '@material-ui/core';
import sample from './assets/sample.mp4';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
      
        <Grid item xs={12}>
            <img src={logo} alt={"logo"} width="150" height="150" ></img>
            </Grid>
            <Grid item xs={2}>
        </Grid>
            <Grid item xs={3}>
          <Paper className={classes.paper}>
          
        <CardMedia 
          component="iframe"
          height="155"

          image={sample}
          title="Contemplative Reptile" />
          </Paper>
          <label>Join Now</label>
        </Grid>
        <Grid item xs={1}>
        </Grid>
            <Grid item xs={5}>
         <CustomizedInputBase />
         
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2} style={{marginTop:"30px"}}>
        <TextField
          id="outlined-textarea"
          label="Sample Offer"
          placeholder="Sample Offer"
          multiline
          fullWidth={false}
          size={'small'}
          value="
          Product name :     Sample item
          Price               :     100$
          store name     :     Sample store
          quantity          :     10
          store id           :     id"
          
          rowsMax="8"
          variant="outlined"
        />
         <label style={{marginLeft:"82px"}}>Sample of An Offer</label>
        </Grid>
        <Grid item xs={6}>
        <Grid item xs={10} style={{height:"200px"}}>
        <TextField
          id="outlined-textarea"
          label="Shopper Main Text Block"
          placeholder="Shopper Main Text Block"
          multiline
          rowsMax="8"
          variant="outlined"
        />
        </Grid>
       
        <Grid item xs={12}>
          <Button variant="contained" color="primary" className={classes.margin}>
          Join Now. It's free
        </Button>
        </Grid>
        </Grid>
       
      </Grid>
    </div>
  );
}