import React from "react";

var remote = window.require("electron").remote;

const OsWindowButtons = (): JSX.Element => {
    return (
        <div
            className="frameless-handle-no-drag"
            style={{
                top: 12,
                left: 12,
                display: "flex",
                position: "fixed",
                zIndex: 9999,
                fontSize: 13
            }}
        >
            <div
                style={{
                    width: 12,
                    height: 12,
                    borderRadius: "25px",
                    background: "#ff5252"
                }}
                onClick={() => {
                    remote.BrowserWindow.getFocusedWindow().close();
                }}
            ></div>
            <div
                style={{
                    width: 12,
                    height: 12,
                    marginLeft: 8,
                    borderRadius: "25px",
                    background: "rgb(255, 204, 0)"
                }}
                onClick={() => {
                    remote.BrowserWindow.getFocusedWindow().minimize();
                }}
            ></div>
            <div
                style={{
                    width: 12,
                    height: 12,
                    marginLeft: 8,
                    borderRadius: "25px",
                    background: "rgb(40, 205, 65)"
                }}
                onClick={() => {
                    remote.BrowserWindow.getFocusedWindow().maximize();
                }}
            ></div>
        </div>
    );
};

export default OsWindowButtons;
