import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/PermIdentity' ;

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}));

export default function InputBio() {
  const classes = useStyles();

  const [personBio, setPersonBio] = React.useState([]);

  const handleChange = (event) => {
    setPersonBio(event.target.value);
    console.log(personBio)
  };

  return (
    <div>
      <TextField
        classBio={classes.margin}
        id="input-with-icon-textfield"
        label="Write a bio"
        onChange={handleChange} 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
