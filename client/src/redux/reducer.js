import {
  START_FIGHT,
  WIN_FIGHT,
  ERROR_AUTH,
  CREATE_REGISTRATION,
  ACCEPT_AUTH,
  UPDATE_PLAYER
} from "./types";

const initialState = {
  authStatus: false,
  player: {
    create: false,
    type: "player",
    name: "player",
    avatar:
      "https://media.hearthpwn.com/avatars/297/167/636023914413148543.png",
    percs: [],
    stats: {
      health: 300,
      damage: 10
    },
    gold: 0,
    xp: 0
  },
  errorAuth: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_REGISTRATION: {
      return {
        ...state
      };
    }

    case ERROR_AUTH: {
      return {
        ...state,
        errorAuth: action.message
      };
    }

    case ACCEPT_AUTH: {
      return {
        ...state,
        player: action.payloadPlayer,
        authStatus: action.payloadStatus
      };
    }

    case UPDATE_PLAYER: {
      return {
        ...state,
        player: action.payloadPlayer
      };
    }

    case START_FIGHT: {
      return {
        ...state
      };
    }

    case WIN_FIGHT: {
      const inialPlayer = state.player;
      inialPlayer.gold += action.gold;
      return {
        ...state,
        player: inialPlayer
      };
    }

    default:
      return {
        ...state
      };
  }
}
