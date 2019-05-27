import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as UsersActions } from '../../store/ducks/users';

import { MainContainer, UserContainer } from './styles';

const UsersPanel = ({ users, removeUserRequest }) => (
  <MainContainer>
    {users.length > 0
      && users.map(user => (
        <UserContainer key={user.id}>
          <img src={user.avatar_url} alt="Profile" />
          <div className="information">
            <strong>{user.name}</strong>
            <small>{user.username}</small>
          </div>
          <button type="button" onClick={() => removeUserRequest(user.id)}>
            X
          </button>
        </UserContainer>
      ))}
  </MainContainer>
);

UsersPanel.propTypes = {
  users: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
  removeUserRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersPanel);
