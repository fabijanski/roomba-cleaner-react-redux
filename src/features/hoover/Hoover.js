import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import hooverImg from './roomba_hoover.png';
import { MODULE_SIZE } from '../../config/constants';
import { getHooverPosition, getDirections } from '../../config/selectors';
import {
  moveHoover,
  cleanDirt,
} from '../../config/actions';


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

class Hoover extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    hooverPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
    directions: PropTypes.arrayOf(PropTypes.string).isRequired,
    cleanDirt: PropTypes.func.isRequired,
    moveHoover: PropTypes.func.isRequired,
  };
  
  componentDidMount() {
    this.handleHooverMove();
  }

  componentDidUpdate() {
    this.props.cleanDirt(this.props.hooverPosition);
  }

  handleHooverMove = () => {
    this.props.directions.forEach((direction, index) => {
      setTimeout(() => this.props.moveHoover(direction), (index + 1) * 750);
    });
  };

  render() {
    return (
      <div className={this.props.classes.root} />
    )
  }
}

const mapStateToProps = state => ({
  hooverPosition: getHooverPosition(state),
  directions: getDirections(state),
});

const mapDispatchToProps = dispatch => ({
  moveHoover: (direction) => dispatch(moveHoover(direction)),
  cleanDirt: (hooverPosition) => dispatch(cleanDirt(hooverPosition)),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Hoover));

