import React from "react";
import IconButton from "@material-ui/core/IconButton";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { addNewTrack, deleteTrack } from "../redux/actions/playlist";
import { GridApi } from "ag-grid-community";
import { get } from "lodash";
import { setShowVideo } from "../redux/actions/player";
const Control = ({
    addNewTrack,
    deleteTrack,
    setShowVideo,
    showVideo,
    gridApi,
}: {
    addNewTrack: Function;
    deleteTrack: Function;
    setShowVideo: Function;
    showVideo: boolean;
    gridApi: GridApi;
}): JSX.Element => {
    return (
        <div
            style={{
                background: "white",
                opacity: 0.8,
                padding: 10,
            }}
        >
            <IconButton
                className="frameless-handle-no-drag"
                size="small"
                style={{ padding: 0, marginRight: 15 }}
                onClick={() => {
                    addNewTrack();
                }}
                disabled={!gridApi}
            >
                <AddIcon />
            </IconButton>
            <IconButton
                size="small"
                style={{ marginRight: 15 }}
                onClick={() => {
                    gridApi.startEditingCell({
                        rowIndex: gridApi.getSelectedNodes()[0].rowIndex,
                        colKey: "title",
                    });
                }}
                disabled={!gridApi}
            >
                <EditIcon />
            </IconButton>
            <IconButton
                size="small"
                style={{ marginRight: 15 }}
                onClick={() => {
                    const deletedTrackId = get(gridApi.getSelectedRows(), [
                        0,
                        "id",
                    ]);
                    if (deletedTrackId) {
                        deleteTrack(gridApi.getSelectedRows()[0].id);
                    }
                }}
            >
                <DeleteIcon />
            </IconButton>

            <IconButton
                size="small"
                style={{ marginRight: 15 }}
                color={showVideo ? "primary" : "default"}
                onClick={() => {
                    setShowVideo(!showVideo);
                }}
            >
                <LocalMoviesIcon />
            </IconButton>
        </div>
    );
};

export default connect(
    (state: Store) => ({
        playing: state.player.playing,
        soundtracks: state.playlist.soundtracks,
        gridApi: state.playlist.gridApi,
        showVideo: state.player.showVideo,
    }),
    (dispatch) => ({
        addNewTrack: () => dispatch(addNewTrack()),
        deleteTrack: (trackId: string) => dispatch(deleteTrack(trackId)),
        setShowVideo: (showVideo: boolean) => dispatch(setShowVideo(showVideo)),
    })
)(Control);
