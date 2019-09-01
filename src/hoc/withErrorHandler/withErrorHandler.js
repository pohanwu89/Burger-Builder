import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux/Aux'

const withErrorHandler = (WrappedComponent, firebaseDb) => {

  return class extends Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null
      }
      this.reqInterceptor = firebaseDb.interceptors.request.use(req => {
        this.setState({ error: null })
        return req;
      })
      this.resInterceptor = firebaseDb.interceptors.response.use(res => res, error => {
        this.setState({ error: error })
      })

    }

    componentWillUnmount() {
      firebaseDb.interceptors.request.eject(this.reqInterceptor);
      firebaseDb.interceptors.request.eject(this.resInterceptor);
    }


    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }

  }



}

export default withErrorHandler;