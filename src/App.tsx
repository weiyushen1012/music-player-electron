import React from "react";

import Playlist from "./components/playlist";
import Player from "./components/player";
import OsWindowButtons from "./components/osWindowButtons";
import Control from "./components/control";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <OsWindowButtons />
      <div
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Player />

        <div
          className="ag-theme-material"
          style={{
            flexGrow: 1,
            width: "100vw",
          }}
        >
          <Playlist />
        </div>

        <Control />
      </div>
    </React.Fragment>
  );
};

export default App;
