import React from "react";
import { connect } from "react-redux";
import { setRegistrationFunctionAC } from "../../redux/actions";

class RegistrationComponent extends React.Component {
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

  submitReg = () => {
    const createUser = {
      username: this.state.inputName,
      password: this.state.inputPassword
    };

    this.props.submitReg(createUser);
  };

  render() {
    return (
      <div className="auth-wrap">
        <h2> Registration page </h2>
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
          <button onClick={this.submitReg}> Registration </button>
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
    submitReg: createUser => dispatch(setRegistrationFunctionAC(createUser))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationComponent);
