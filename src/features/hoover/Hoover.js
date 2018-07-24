import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import hooverImg from './roomba_hoover.png';
import handleMovement from './movement';
import { MODULE_SIZE } from '../../config/constants';
import { getHooverPosition } from '../../config/selectors';


const styles = {
  root: props => ({
    position: 'absolute',
    backgroundImage: `url('${hooverImg}')`,
    left: props.hooverPosition[0] * MODULE_SIZE,
    bottom: props.hooverPosition[1] * MODULE_SIZE,
    width: MODULE_SIZE,
    height: MODULE_SIZE,
    backgroundSize: 'cover',
  }),
};

function Hoover(props) {
  return (
    <div className={props.classes.root} />
  )
}

Hoover.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  hooverPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = state => ({
  hooverPosition: getHooverPosition(state),
});

const HooverStyled = injectSheet(styles)(Hoover);

export default connect(mapStateToProps)(handleMovement(HooverStyled));

