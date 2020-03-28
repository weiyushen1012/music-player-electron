import {
    SET_PLAY,
    SET_PROGRESS,
    SET_CURRENT_TRACK_ID
} from "../actionTypes/player";

const initialStore = {
    currentTrackId: 1,
    progress: 0,
    playing: false
};

const reducer = (
    state: PlayerStore = initialStore,
    action: any = {}
): PlayerStore => {
    switch (action.type) {
        case SET_PLAY: {
            return {
                ...state,
                playing: action.playing
            };
        }

        case SET_PROGRESS: {
            return {
                ...state,
                progress: action.progress
            };
        }

        case SET_CURRENT_TRACK_ID: {
            return {
                ...state,
                currentTrackId: action.id
            };
        }

        default:
            return state;
    }
};

export default reducer;
