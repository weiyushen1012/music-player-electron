import React from "react";
import { connect } from "react-redux";

import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import { ColDef } from "ag-grid-community";
import {
    setPlay,
    setProgress,
    setCurrentTrackId
} from "../redux/actions/player";

const columnDefs: ColDef[] = [
    { field: "title", width: 250, rowDrag: true },
    { field: "artist", width: 180 },
    { field: "genre", width: 140 },
    { field: "year", width: 120 },
    { field: "id", width: 80, headerName: "#", hide: true },
    { field: "url", width: 400 }
].map(def => ({
    ...def,
    editable: true,
    resizable: true,
    sortable: true
}));

const Playlist = ({
    playing,
    soundtracks,
    setPlay,
    setProgress,
    setCurrentTrackId
}: {
    playing: boolean;
    soundtracks: Soundtrack[];
    setPlay: Function;
    setProgress: Function;
    setCurrentTrackId: Function;
}): JSX.Element => {
    return (
        <AgGridReact
            animateRows
            rowDragManaged
            columnDefs={columnDefs}
            rowData={soundtracks.map(
                (d: { artist: string; title: string }) => ({
                    ...d,
                    dragHandle: `${d.artist} - ${d.title}`
                })
            )}
            rowSelection="single"
            suppressClickEdit
            onCellDoubleClicked={(params: any) => {
                setProgress(0);
                if (!playing) {
                    setPlay(true);
                }
                setCurrentTrackId(params.data.id);
            }}
        ></AgGridReact>
    );
};

export default connect(
    (state: Store) => ({
        playing: state.player.playing,
        soundtracks: state.playlist.soundtracks
    }),
    dispatch => ({
        setPlay: (playing: boolean) => dispatch(setPlay(playing)),
        setProgress: (progress: number) => dispatch(setProgress(progress)),
        setCurrentTrackId: (id: number) => dispatch(setCurrentTrackId(id))
    })
)(Playlist);
