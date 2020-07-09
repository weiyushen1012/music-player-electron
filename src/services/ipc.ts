const { ipcRenderer } = window.require("electron");

const SAVE_PLAYLIST: string = "SAVE_PLAYLIST";

export const savePlaylist = (playlist: Soundtrack[]) => {
  ipcRenderer.send(SAVE_PLAYLIST, playlist);
};
