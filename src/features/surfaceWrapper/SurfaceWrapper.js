import React  from 'react';
import injectSheet from 'react-jss';
import Room from '../room/Room';
import Hoover from '../hoover/Hoover';
import PropTypes from "prop-types";


const styles = {
  root: {
    position: 'relative',
    width: 250,
    height: 250,
    margin: '20px auto',
    border: '5px solid #000',
  }
};

function SurfaceWrapper(props) {
  return (
    <div className={props.classes.root}>
      <Room />
      <Hoover />
    </div>
  );
}

SurfaceWrapper.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(SurfaceWrapper);
