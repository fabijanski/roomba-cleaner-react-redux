import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';


const styles = {
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#b5f0ff',
  },
};

function Room(props) {
  console.log(props);
  return (
    <div className={props.classes.root} />
  )
}

Room.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

function mapStateToProps(state) {
  return {
    ...state.room,
  }
}

const RoomStyled = injectSheet(styles)(Room);
export default connect(mapStateToProps)(RoomStyled);
