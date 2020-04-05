interface PlaylistStore {
    soundtracks: Soundtrack[];
    gridApi: GridApi;
}

interface Soundtrack {
    id: string;
    title?: string;
    artist?: string;
    genre?: string;
    url?: string;
    year?: string;
}
