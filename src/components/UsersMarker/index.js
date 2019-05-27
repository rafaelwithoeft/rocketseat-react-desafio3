import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Marker } from 'react-map-gl';

import { Image } from './styles';

const UsersMarker = ({ users }) => users.length > 0
  && users.map(user => (
    <Marker key={user.id} longitude={user.longitude} latitude={user.latitude}>
      <a href={user.url} target="_blank" rel="noopener noreferrer">
        <Image src={user.avatar_url} alt="Profile" />
      </a>
    </Marker>
  ));

const mapStateToProps = state => ({
  users: state.users.data,
});

UsersMarker.propTypes = {
  users: PropTypes.shape({
    id: PropTypes.number,
    longitude: PropTypes.number,
    latitude: PropTypes.number,
    avatar_url: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(UsersMarker);
