import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import dirtImg from './dirt.png';
import { MODULE_SIZE } from '../../config/constants';


const styles = {
  root: props => ({
    position: 'absolute',
    backgroundImage: `url('${dirtImg}')`,
    width: MODULE_SIZE,
    height: MODULE_SIZE,
    backgroundSize: 'cover',
    left: props.coordinates[0] * MODULE_SIZE,
    bottom: props.coordinates[1] * MODULE_SIZE,
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
