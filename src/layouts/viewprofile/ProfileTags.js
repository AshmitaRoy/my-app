import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    color: "#000",
    backgroundColor: "#ddd48f",
    margin: 6,
    opacity: "90%",
    size: "10"
  },
});

function ProfileTags(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Chip label="#zero-waste" className={classes.chip} />
      <Chip label="#vegan" className={classes.chip} />
    </div>
  );
}

ProfileTags.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileTags);
