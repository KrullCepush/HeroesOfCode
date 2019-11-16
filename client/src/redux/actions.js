import {
  START_FIGHT,
  WIN_FIGHT,
  CREATE_REGISTRATION,
  ERROR_AUTH,
  CREATE_LOGIN,
  ACCEPT_AUTH,
  UPDATE_PLAYER
} from "./types";

const RegistrationAC = () => {
  return {
    type: CREATE_REGISTRATION
  };
};

const LoginAC = () => {
  return {
    type: CREATE_LOGIN
  };
};

const AuthAC = player => {
  return {
    type: ACCEPT_AUTH,
    payloadPlayer: player,
    payloadStatus: true
  };
};

const UpdateHomeAC = player => {
  return {
    type: UPDATE_PLAYER,
    payloadPlayer: player
  };
};

const errorAuthAC = errorMessage => {
  return {
    type: ERROR_AUTH,
    message: errorMessage
  };
};

const setLoginFunctionAC = objectUser => {
  return async dispatch => {
    dispatch(LoginAC());
    const res = await fetch("/users/login", {
      method: "post",
      headers: {
        Accept: "aplication/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objectUser)
    });
    const data = await res.json();
    if (data.status === false) {
      dispatch(errorAuthAC(data.errorStatus));
    } else {
      dispatch(AuthAC(data.player));
    }
  };
};

const setRegistrationFunctionAC = objectUser => {
  return async dispatch => {
    dispatch(RegistrationAC());
    const res = await fetch("/users/registration", {
      method: "post",
      headers: {
        Accept: "aplication/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objectUser)
    });
    const data = await res.json();
    if (data.status === false) {
      dispatch(errorAuthAC(data.errorStatus));
    } else {
      dispatch(AuthAC(data.player));
    }
  };
};

const StartFightAC = () => {
  return {
    type: START_FIGHT
  };
};

const winFightAC = goldValue => {
  return {
    type: WIN_FIGHT,
    gold: goldValue
  };
};

export {
  StartFightAC,
  winFightAC,
  setRegistrationFunctionAC,
  setLoginFunctionAC,
  UpdateHomeAC
};
