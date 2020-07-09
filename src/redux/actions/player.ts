export const SET_PLAY = "player/SET_PLAY";
export const SET_PROGRESS = "player/SET_PROGRESS";
export const SET_CURRENT_TRACK_ID = "player/SET_CURRENT_TRACK_ID";
export const SET_SHOW_VIDEO = "player/SET_SHOW_VIDEO";

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
