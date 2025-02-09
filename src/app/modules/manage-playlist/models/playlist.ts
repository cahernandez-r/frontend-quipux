export type ResponseFetchAllPlayList = {
    playlists: Playlist[];
}

export type Playlist = {
    name: string;
    description: string;
}