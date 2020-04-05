import React from "react";
import { connect } from "react-redux";

import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import { ColDef, GridApi } from "ag-grid-community";
import {
    setPlay,
    setProgress,
    setCurrentTrackId,
} from "../redux/actions/player";
import { setGridApi } from "../redux/actions/playlist";

const columnDefs: ColDef[] = [
    { field: "title", width: 250, rowDrag: true },
    { field: "artist", width: 180 },
    { field: "genre", width: 140 },
    { field: "year", width: 120 },
    { field: "id", width: 80, headerName: "#", hide: true },
    { field: "url", width: 400 },
].map((def) => ({
    ...def,
    editable: true,
    resizable: true,
    sortable: true,
}));

const Playlist = ({
    playing,
    soundtracks,
    setPlay,
    setProgress,
    setCurrentTrackId,
    setGridApi,
}: {
    playing: boolean;
    soundtracks: Soundtrack[];
    setPlay: Function;
    setProgress: Function;
    setCurrentTrackId: Function;
    setGridApi: Function;
}): JSX.Element => {
    return (
        <AgGridReact
            animateRows
            rowDragManaged
            columnDefs={columnDefs}
            rowData={soundtracks}
            rowSelection="single"
            suppressClickEdit
            editType="fullRow"
            onCellDoubleClicked={(params: any) => {
                setProgress(0);
                if (!playing) {
                    setPlay(true);
                }
                setCurrentTrackId(params.data.id);
            }}
            onGridReady={(params: any) => setGridApi(params.api)}
        ></AgGridReact>
    );
};

export default connect(
    (state: Store) => ({
        playing: state.player.playing,
        soundtracks: state.playlist.soundtracks,
    }),
    (dispatch) => ({
        setPlay: (playing: boolean) => dispatch(setPlay(playing)),
        setProgress: (progress: number) => dispatch(setProgress(progress)),
        setCurrentTrackId: (id: number) => dispatch(setCurrentTrackId(id)),
        setGridApi: (gridApi: GridApi) => dispatch(setGridApi(gridApi)),
    })
)(Playlist);
