import React  from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Room from '../room/Room';
import Hoover from '../hoover/Hoover';
import { MODULE_SIZE, TEXT_DATA_URL } from '../../config/constants';
import { getRoomHeight, getRoomWidth } from '../../config/selectors';
import { fetchData } from '../../config/api';

import {
  initHooverState,
  initRoomState,
} from '../../config/actions';

const styles = {
  root: props => ({
    position: 'relative',
    width: props.roomWidth * MODULE_SIZE,
    height: props.roomHeight * MODULE_SIZE,
    margin: '20px auto',
    border: '5px solid #000',
  }),
};

class SurfaceWrapper extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    roomWidth: PropTypes.number.isRequired,
    roomHeight: PropTypes.number.isRequired,
  };
  
  componentDidMount() {
    this.initializeStore();
  }
  
  async initializeStore() {
    const state = await fetchData(TEXT_DATA_URL);
    await this.props.initRoomState(state.roomDimensions, state.dirtCoordinates);
    await this.props.initHooverState(state.position, state.directions);
  };
  
  render() {
    return (
      <div className={this.props.classes.root}>
        <Room />
        <Hoover />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  roomWidth: getRoomWidth(state),
  roomHeight: getRoomHeight(state),
});

const mapDispatchToProps = dispatch => ({
  initRoomState: (roomDimensions, dirtCoordinates) => dispatch(initRoomState(roomDimensions, dirtCoordinates)),
  initHooverState: (position, directions) => dispatch(initHooverState(position, directions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(SurfaceWrapper));


