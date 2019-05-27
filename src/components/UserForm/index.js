import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Creators as UsersActions } from '../../store/ducks/users';
import { Creators as ModalActions } from '../../store/ducks/modal';

import { MainContainer } from './styles';

class UserForm extends Component {
  state = {
    input: '',
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { input } = this.state;
    const { addUserRequest, modal } = this.props;
    addUserRequest(input, modal.latitude, modal.longitude);

    this.setState({ input: '' });
  };

  /**
   * Handle cancel request.
   */
  handleReset = () => {
    const { hideModal } = this.props;
    this.setState({ input: '' });
    hideModal();
  };

  render() {
    const { input } = this.state;
    const { modal, error, loading } = this.props;

    return (
      modal.show && (
        <MainContainer error={!!error}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={input}
              placeholder="Usuário do github"
              onChange={this.handleChange}
            />
            <div className="error">{!!error && error}</div>
            <div className="actions">
              <button type="submit" className="primary" disabled={loading}>
                {loading ? 'Carregando' : 'Salvar'}
              </button>
              <button type="button" className="danger" onClick={() => this.handleReset()}>
                Cancelar
              </button>
            </div>
          </form>
        </MainContainer>
      )
    );
  }
}

UserForm.propTypes = {
  modal: PropTypes.shape({
    show: PropTypes.bool,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }).isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  addUserRequest: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.modal,
  error: state.users.error,
  loading: state.users.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...UsersActions, ...ModalActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserForm);
