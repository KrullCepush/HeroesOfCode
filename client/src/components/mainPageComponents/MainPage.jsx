import React from "react";
import "./mainpage.css";
import LoginComponent from "./LoginComponent";
import RegistrationComponent from "./RegistrationComponent";
import { connect } from "react-redux";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aSideActive: false,
      popUpActive: null
    };
  }

  async componentDidMount() {
    const checkSession = await fetch("/users/checksession");
    const req = await checkSession.json();

    if (req.status) {
      this.props.history.push("/home");
    }
  }

  componentDidUpdate() {
    if (this.props.authStatus) {
      this.props.history.push("/home");
    }
  }

  touchASide = () => {
    if (this.state.aSideActive) {
      this.setState({
        aSideActive: false
      });
    } else {
      this.setState({
        aSideActive: true
      });
    }
  };

  popUpActiveLogin = () => {
    this.setState({
      popUpActive: "login"
    });
  };

  popUpActiveReg = () => {
    this.setState({
      popUpActive: "registration"
    });
  };

  get aSideFalse() {
    return (
      <>
        <div className="aside-wrap" onClick={this.touchASide}>
          <div className="aside-pic"> > </div>
        </div>
      </>
    );
  }

  get aSideTrue() {
    return (
      <>
        <div className="aside-wrap-true">
          <nav className="aside-bar">
            <div className="aside-wrap-btn" onClick={this.popUpActiveLogin}>
              <img src="/img/header/noauth/auth.png" alt="home" />
              <div className="aside-wrap-btn-link aside-wrap-btn-link__home">
                Login
              </div>
            </div>
            <div className="aside-wrap-btn" onClick={this.popUpActiveReg}>
              <img src="/img/header/noauth/reg.png" alt="home" />
              <div className="aside-wrap-btn-link aside-wrap-btn-link__home">
                Registration
              </div>
            </div>
          </nav>
          <button className="aside-btn-closed" onClick={this.touchASide}>
            {" "}
            Closed{" "}
          </button>
        </div>
      </>
    );
  }

  render() {
    return (
      <div className="main-page-wrap">
        {this.state.aSideActive === false ? this.aSideFalse : this.aSideTrue}
        <div className="wrap-auth">
          {this.state.popUpActive === "login" ? <LoginComponent /> : ""}
          {this.state.popUpActive === "registration" ? (
            <RegistrationComponent />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    authStatus: store.authStatus
  };
}

export default connect(mapStateToProps)(MainPage);
