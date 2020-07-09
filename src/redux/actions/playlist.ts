import { GridApi } from "ag-grid-community";

export const ADD_NEW_TRACK = "playlist/ADD_NEW_TRACK";
export const DELETE_TRACK = "playlist/DELETE_TRACK";
export const SET_GRID_API = "playlist/SET_GRID_API";

export const addNewTrack = () => ({
  type: ADD_NEW_TRACK,
});

export const deleteTrack = (trackId: string) => ({
  type: DELETE_TRACK,
  trackId,
});

export const setGridApi = (gridApi: GridApi) => ({
  type: SET_GRID_API,
  gridApi,
});
