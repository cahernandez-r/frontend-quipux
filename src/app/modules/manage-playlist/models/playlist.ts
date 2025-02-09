export type ResponseFetchAllPlayList = {
    playlists: Playlist[];
}

export type Playlist = {
    name: string;
    description: string;
}

export type ResponseFetchDetail = {
    songs: Song[];
} & Playlist;

export type Song = {
    title: string;
    artist: string;
    album: string;
    year: string;
    genre: string;
}