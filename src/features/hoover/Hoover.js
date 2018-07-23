import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import hooverImg from './roomba_hoover.png';


const styles = {
  root: props => ({
    position: 'absolute',
    backgroundImage: `url('${hooverImg}')`,
    left: props.position[0],
    bottom: props.position[1],
    width: 50,
    height: 50,
    backgroundSize: 'cover'
  }),
};

function Hoover(props) {
  return (
    <div className={props.classes.root} />
  )
}

Hoover.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

function mapStateToProps(state) {
  return {
    ...state.hoover,
  }
}

const HooverStyled = injectSheet(styles)(Hoover);
export default connect(mapStateToProps)(HooverStyled);
