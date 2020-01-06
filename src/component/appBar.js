import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './assets/design.css'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  label:{
    marginLeft: '-270px',
    fontSize: '12px',
    fontWeight: 'bold',
  }
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
      <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Our Database for Free"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        
        <MenuIcon />
      </IconButton>
      
    </Paper>
    <FormControlLabel
    value="Search Local Business First"
    control={<Checkbox color="primary"  />}
    label="Search Local Business First"
    labelPlacement="Search Local Business First"
  />
  <br />
  <label className={classes.label}>155,819,400 Barcodes in our Database</label>
  </React.Fragment>
  );
}