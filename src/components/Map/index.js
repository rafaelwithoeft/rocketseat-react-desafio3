import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMapGL from 'react-map-gl';

import { Creators as UsersActions } from '../../store/ducks/users';
import { Creators as ModalActions } from '../../store/ducks/modal';

import UsersMarker from '../UsersMarker';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      zoom: 12,
      latitude: -26.8352921,
      longitude: -49.2790834,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resizeWindow);
    this.resizeWindow();

    navigator.geolocation.getCurrentPosition((position) => {
      this.setState(state => ({
        ...state,
        viewport: {
          ...state.viewport,
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        },
      }));
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeWindow);
  }

  resizeWindow = () => {
    this.setState(state => ({
      viewport: {
        ...state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    }));
  };

  /**
   * Handle map click.
   */
  handleClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    const { showModal } = this.props;
    showModal(latitude, longitude);
  };

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/dark-v10"
        {...viewport}
        onViewportChange={view => this.setState(state => ({ ...state, viewport: view }))}
        onClick={e => this.handleClick(e)}
      >
        <UsersMarker />
      </ReactMapGL>
    );
  }
}

Map.propTypes = {
  showModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, UsersActions, ModalActions), dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Map);
