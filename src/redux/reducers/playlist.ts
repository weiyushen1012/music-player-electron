import _data from "./data.json";

const data = _data.reverse();

const initialState = {
    soundtracks: data
};

const reducer = (
    state: PlaylistStore = initialState,
    action: any = {}
): PlaylistStore => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;
