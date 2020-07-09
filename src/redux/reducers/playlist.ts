import _data from "./data.json";
import { ADD_NEW_TRACK, SET_GRID_API, DELETE_TRACK } from "../actions/playlist";
import { v1 as uuidv1 } from "uuid";
import { findIndex } from "lodash";

import update from "immutability-helper";

const data = _data.reverse();

const initialState = {
  soundtracks: data,
  gridApi: null,
};

const reducer = (
  state: PlaylistStore = initialState,
  action: any = {}
): PlaylistStore => {
  switch (action.type) {
    case SET_GRID_API: {
      return {
        ...state,
        gridApi: action.gridApi,
      };
    }

    case ADD_NEW_TRACK: {
      const newSoundTracks = [...[{ id: uuidv1() }], ...state.soundtracks];
      return {
        ...state,
        soundtracks: update(state.soundtracks, {
          $set: newSoundTracks,
        }),
      };
    }

    case DELETE_TRACK: {
      const deletedTrackIndex = findIndex(
        state.soundtracks,
        (track) => track.id === action.trackId
      );

      return {
        ...state,
        soundtracks: update(state.soundtracks, {
          $splice: [[deletedTrackIndex, 1]],
        }),
      };
    }

    default:
      return state;
  }
};

export default reducer;
