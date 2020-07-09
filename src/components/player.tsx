import React from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Slider from "@material-ui/core/Slider";
import ReactPlayer from "react-player";

import { get, find } from "lodash";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FastForwardIcon from "@material-ui/icons/FastForward";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import PauseIcon from "@material-ui/icons/Pause";
import { setPlay, setProgress } from "../redux/actions/player";

const Player = ({
  currentTrackId,
  playing,
  progress,
  soundtracks,
  setPlay,
  setProgress,
  showVideo,
}: {
  currentTrackId: string;
  playing: boolean;
  progress: number;
  soundtracks: Soundtrack[];
  setPlay: Function;
  setProgress: Function;
  showVideo: boolean;
}): JSX.Element => {
  const currentTrack = find(
    soundtracks,
    (track: { id: string }) => track.id === currentTrackId
  );
  const ref: any = React.useRef();

  const handleChange = (_: any, newValue: any) => {
    ref.current.seekTo(
      (newValue / 100.0) * ref.current.getDuration(),
      "seconds"
    );

    setProgress(newValue);
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom right, #512da8 , #64ffda)",
        opacity: 0.9,
      }}
    >
      <div
        className="frameless-handle"
        style={{
          padding: 10,
          color: "#fafafa",

          textAlign: "center",
          height: showVideo ? 10 : "auto",
        }}
      >
        {!showVideo && (
          <div
            style={{
              userSelect: "none",
              marginTop: 20,
            }}
          >
            <div
              style={{
                fontSize: "13pt",
                marginBottom: 5,
                fontWeight: "bold",
              }}
            >
              {get(currentTrack, "title")}
            </div>

            <div style={{ fontSize: "10pt" }}>
              {get(currentTrack, "artist")}
            </div>
          </div>
        )}

        {showVideo && (
          <div
            style={{
              textAlign: "center",
              fontSize: "10pt",
              fontWeight: "bold",
              userSelect: "none",
            }}
          >
            {`${get(currentTrack, "artist")} - ${get(currentTrack, "title")}`}
          </div>
        )}
      </div>

      <div
        style={{
          display: showVideo ? "block" : "none",
          width: "100%",
          background: "black",
        }}
      >
        <div
          style={{
            height: 360,
            width: "100%",
            zIndex: 5,
            opacity: playing ? 0 : 1,
            background: "black",
            position: "absolute",
          }}
        />
        <ReactPlayer
          style={{
            marginLeft: "calc(50vw - 320px)",
          }}
          ref={ref}
          url={get(currentTrack, "url")}
          playing={playing}
          onProgress={(params) => {
            setProgress(Math.floor(params.played * 100));
          }}
          onPause={() => {
            if (playing) {
              setPlay(false);
            }
          }}
          onPlay={() => {
            if (!playing) {
              setPlay(true);
            }
          }}
        />
      </div>

      <div
        style={{
          marginTop: 8,
          marginLeft: "10vw",
          marginRight: "10vw",
          paddingLeft: 20,
          paddingRight: 20,
        }}
        className="frameless-handle-no-drag"
      >
        <Slider
          style={{ color: "#fafafa" }}
          value={progress}
          onChange={handleChange}
        />
      </div>

      <div style={{ textAlign: "center", marginBottom: 3 }}>
        <IconButton className="frameless-handle-no-drag">
          <FastRewindIcon />
        </IconButton>
        <IconButton
          className="frameless-handle-no-drag"
          onClick={() => setPlay(!playing)}
        >
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton className="frameless-handle-no-drag">
          <FastForwardIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default connect(
  (state: Store) => ({
    soundtracks: state.playlist.soundtracks,
    progress: state.player.progress,
    playing: state.player.playing,
    currentTrackId: state.player.currentTrackId,
    showVideo: state.player.showVideo,
  }),
  (dispatch) => ({
    setPlay: (playing: boolean) => dispatch(setPlay(playing)),
    setProgress: (progress: number) => dispatch(setProgress(progress)),
  })
)(Player);
