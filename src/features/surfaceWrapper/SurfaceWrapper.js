import React, { Fragment, Component } from 'react';
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
  getHooverPosition,
  initHooverPosition,
  initDirections,
  initDirtCoordinates,
  initRoomDimensions,
  stateInitialized,
  getRemovedPatchesCount,
} from '../../config/selectors';
import {
  initHooverState,
  initRoomState,
} from '../../config/actions';


const styles = {
  info: {
    width: 200,
    margin: '10px auto',
    padding: 10,
    textAlign: 'center',
    '& h1': {
      fontSize: '1rem'
    },
    '& p, h1': {
      margin: '8px 0',
    },
  },
  room: props => ({
    position: 'relative',
    width: props.roomWidth * MODULE_SIZE,
    height: props.roomHeight * MODULE_SIZE,
    margin: '0 auto',
    border: '5px solid #000',
  }),
};

class SurfaceWrapper extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    roomWidth: PropTypes.number,
    roomHeight: PropTypes.number,
    startPosition: PropTypes.arrayOf(PropTypes.number),
    currentPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
    directions: PropTypes.arrayOf(PropTypes.string),
    dirtCoordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    roomDimensions: PropTypes.arrayOf(PropTypes.number).isRequired,
    renderReady: PropTypes.bool.isRequired,
    removedPatches: PropTypes.number.isRequired,
    initRoomState: PropTypes.func.isRequired,
    initHooverState: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
  };
  
  static defaultProps = {
    roomWidth: 0,
    roomHeight: 0,
    startPosition: [],
    directions: [],
    dirtCoordinates: [],
    roomDimensions: [],
  };
  
  async componentDidMount() {
    await this.props.fetchData();
    this.initializeStore();
  }
  
  initializeStore() {
    this.props.initRoomState(this.props.roomDimensions, this.props.dirtCoordinates);
    this.props.initHooverState(this.props.startPosition, this.props.directions);
  };
  
  render() {
    return (
      <Fragment>
        <div className={this.props.classes.info}>
          <h1>Current Hoover Position:</h1>
          <p>x = {this.props.currentPosition[0]}</p>
          <p>y = {this.props.currentPosition[1]}</p>
          
          <h1>Removed Patches of Dirt:</h1>
          <p>{this.props.removedPatches}</p>
        </div>
        {
          this.props.renderReady &&
          (
            <div className={this.props.classes.room}>
              <Room />
              <Hoover />
            </div>
          )
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  roomWidth: getRoomWidth(state),
  roomHeight: getRoomHeight(state),
  startPosition: initHooverPosition(state),
  currentPosition: getHooverPosition(state),
  directions: initDirections(state),
  dirtCoordinates: initDirtCoordinates(state),
  roomDimensions: initRoomDimensions(state),
  renderReady: stateInitialized(state),
  removedPatches: getRemovedPatchesCount(state),
});

const mapDispatchToProps = dispatch => ({
  initRoomState: (roomDimensions, dirtCoordinates) => dispatch(initRoomState(roomDimensions, dirtCoordinates)),
  initHooverState: (position, directions) => dispatch(initHooverState(position, directions)),
  fetchData: () => dispatch(dataRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(SurfaceWrapper));


