import React, { Component, mapStateToProps } from "react";
import { connect } from "react-redux";

// export default WrappedComponent => {
//   const AuthComponent = props => {
//     const { auth, history } = props;

//     const userRedirect = () => {
//       if (!auth) history.push("/login/");
//     };

//     useEffect(() => {
//       userRedirect();
//     });

//     return <WrappedComponent {...props} />;
//   };

//   const mapStatetoProps = state => {
//     return { auth: state.loginReducer.authenticated };
//   };

//   return connect(mapStateToProps)(AuthComponent);
// };

export default WrappedComponent => {
  class AuthComponent extends Component {
    componentDidMount() {
      if (!this.props.auth) {
        this.props.history.push("/login/");
      }
    }

    componentDidUpdate() {
      if (!this.props.auth) {
        this.props.history.push("/login/");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.auth) {
        this.props.history.push("/login/");
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      auth: state.loginReducer.authenticated
    };
  };

  return connect(mapStateToProps)(AuthComponent);
};
