interface PlaylistStore {
    soundtracks: Soundtrack[];
}

interface Soundtrack {
    id: number;
    title: string;
    artist: string;
    genre: string;
    url: string;
    year: string;
}
