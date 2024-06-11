type Album = {
    artist: string;
    title: string;
    tracks?: number;
};

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Create three albums and print them
const album1 = make_album('Artist One', 'Album One');
const album2 = make_album('Artist Two', 'Album Two');
const album3 = make_album('Artist Three', 'Album Three', 12);

console.log(album1);
console.log(album2);
console.log(album3);
