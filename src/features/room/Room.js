import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Dirt from '../dirt/Dirt';


const styles = {
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#b5f0ff',
  },
};

function Room(props) {
  return (
    <div className={props.classes.root}>
      {
        props.dirtCoordinates.map(coordinates => <Dirt key={coordinates.join('')} coordinates={coordinates}/>)
      }
    </div>
  )
}

Room.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  dirtCoordinates: PropTypes.arrayOf(PropTypes.array).isRequired,
};

function mapStateToProps(state) {
  return {
    ...state.room,
  }
}

const RoomStyled = injectSheet(styles)(Room);
export default connect(mapStateToProps)(RoomStyled);
