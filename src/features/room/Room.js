import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Dirt from '../dirt/Dirt';
import { getDirtCoordinates, getHooverPosition } from '../../config/selectors';


const styles = {
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#b5f0ff',
  },
};

class Room extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    dirtCoordinates: PropTypes.arrayOf(PropTypes.array).isRequired,
    hooverPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
  };
  
  render() {
    return (
      <div className={this.props.classes.root}>
        {
          this.props.dirtCoordinates.map(coordinates => (
            <Dirt
              key={coordinates.join('')}
              coordinates={coordinates}
            />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dirtCoordinates: getDirtCoordinates(state),
  hooverPosition: getHooverPosition(state),
});

const RoomStyled = injectSheet(styles)(Room);

export default connect(mapStateToProps)(RoomStyled);
