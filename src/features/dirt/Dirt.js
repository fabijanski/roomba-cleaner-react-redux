import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import dirtImg from './dirt.png';


const styles = {
  root: props => ({
    position: 'absolute',
    backgroundImage: `url('${dirtImg}')`,
    width: 50,
    height: 50,
    backgroundSize: 'cover',
    left: props.coordinates[0] * 50,
    bottom: props.coordinates[1] * 50,
  }),
};


function Dirt(props) {
  return (
    <div className={props.classes.root} />
  )
}

Dirt.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default injectSheet(styles)(Dirt);
