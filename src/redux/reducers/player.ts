import {
  SET_PLAY,
  SET_PROGRESS,
  SET_CURRENT_TRACK_ID,
  SET_SHOW_VIDEO,
} from "../actions/player";

const initialStore = {
  currentTrackId: "",
  progress: 0,
  playing: false,
  showVideo: true,
};

const reducer = (
  state: PlayerStore = initialStore,
  action: any = {}
): PlayerStore => {
  switch (action.type) {
    case SET_PLAY: {
      return {
        ...state,
        playing: action.playing,
      };
    }

    case SET_PROGRESS: {
      return {
        ...state,
        progress: action.progress,
      };
    }

    case SET_CURRENT_TRACK_ID: {
      return {
        ...state,
        currentTrackId: action.id,
      };
    }

    case SET_SHOW_VIDEO: {
      return {
        ...state,
        showVideo: action.showVideo,
      };
    }

    default:
      return state;
  }
};

export default reducer;
