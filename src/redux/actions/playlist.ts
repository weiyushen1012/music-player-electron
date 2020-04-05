import {
    ADD_NEW_TRACK,
    SET_GRID_API,
    DELETE_TRACK,
} from "../actionTypes/playlist";
import { GridApi } from "ag-grid-community";

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
