export type ResponseFetchAllSongs = {
    songs: Song[]
}

export type Song = {
    id?: number;
    title: string;
    artist: string;
    album: string;
    year: string;
    genre: string;
}