import React  from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Room from '../room/Room';
import Hoover from '../hoover/Hoover';
import { MODULE_SIZE } from '../../config/constants';
import { getRoomHeight, getRoomWidth } from '../../config/selectors';


const styles = {
  root: props => ({
    position: 'relative',
    width: props.roomWidth * MODULE_SIZE,
    height: props.roomHeight * MODULE_SIZE,
    margin: '20px auto',
    border: '5px solid #000',
  }),
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
  roomWidth: PropTypes.number.isRequired,
  roomHeight: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  roomWidth: getRoomWidth(state),
  roomHeight: getRoomHeight(state),
});

const SurfaceWrapperStyled = injectSheet(styles)(SurfaceWrapper);

export default connect(mapStateToProps)(SurfaceWrapperStyled);


