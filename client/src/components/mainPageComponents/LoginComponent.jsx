import React from "react";
import { connect } from "react-redux";
import { setLoginFunctionAC } from "../../redux/actions";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      inputPassword: "",
      errorAuth: null
    };
  }

  componentDidUpdate() {
    if (
      this.props.errorAuth !== null &&
      this.props.errorAuth !== this.state.errorAuth
    ) {
      this.setState({
        errorAuth: this.props.errorAuth
      });
    }
  }

  onChange = event => {
    if (event.target.name === "inputName") {
      this.setState({
        inputName: event.target.value
      });
    } else if (event.target.name === "inputPassword") {
      this.setState({
        inputPassword: event.target.value
      });
    }
  };

  get errorAuth() {
    return (
      <>
        <div className="errorauth"> {this.state.errorAuth} </div>
      </>
    );
  }

  submitLogin = () => {
    const authUser = {
      username: this.state.inputName,
      password: this.state.inputPassword
    };
    this.props.submitLogin(authUser);
  };

  render() {
    return (
      <div className="auth-wrap">
        <h2> Login page </h2>
        <div>
          <input
            type="text"
            name="inputName"
            onChange={this.onChange}
            value={this.state.inputName}
          />
          <input
            type="text"
            name="inputPassword"
            onChange={this.onChange}
            value={this.state.inputPassword}
          />
          <button onClick={this.submitLogin}> Login </button>
        </div>
        {this.state.errorAuth === null ? "" : this.errorAuth}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    errorAuth: store.errorAuth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitLogin: authUser => dispatch(setLoginFunctionAC(authUser))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
