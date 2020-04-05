import {
    SET_PLAY,
    SET_PROGRESS,
    SET_CURRENT_TRACK_ID,
    SET_SHOW_VIDEO,
} from "../actionTypes/player";

export const setPlay = (playing: boolean) => ({
    type: SET_PLAY,
    playing,
});

export const setProgress = (progress: number) => ({
    type: SET_PROGRESS,
    progress,
});

export const setCurrentTrackId = (id: number) => ({
    type: SET_CURRENT_TRACK_ID,
    id,
});

export const setShowVideo = (showVideo: boolean) => ({
    type: SET_SHOW_VIDEO,
    showVideo,
});
