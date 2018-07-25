import React  from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Room from '../room/Room';
import Hoover from '../hoover/Hoover';
import { MODULE_SIZE } from '../../config/constants';
import { dataRequest } from '../../config/api';
import {
  getRoomHeight,
  getRoomWidth,
  initHooverPosition,
  initDirections,
  initDirtCoordinates,
  initRoomDimensions,
} from '../../config/selectors';

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
  
  async componentDidMount() {
    await this.props.fetchData();
    this.initializeStore();
  }
  
  
  initializeStore() {
    this.props.initRoomState(this.props.roomDimensions, this.props.dirtCoordinates);
    this.props.initHooverState(this.props.hooverPosition, this.props.directions);
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
  hooverPosition: initHooverPosition(state),
  directions: initDirections(state),
  dirtCoordinates: initDirtCoordinates(state),
  roomDimensions: initRoomDimensions(state),
});

const mapDispatchToProps = dispatch => ({
  initRoomState: (roomDimensions, dirtCoordinates) => dispatch(initRoomState(roomDimensions, dirtCoordinates)),
  initHooverState: (position, directions) => dispatch(initHooverState(position, directions)),
  fetchData: () => dispatch(dataRequest()),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(SurfaceWrapper));


