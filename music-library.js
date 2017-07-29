class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

const trackOne = new Track('Hypnotize', 5, 239);
console.log(trackOne);
const trackTwo = new Track('Machine Gun Funk', 5, 261);
console.log(trackTwo);

class Playlist {
  constructor (name) {
    this.name =  name;
    this.tracks = [];
  }
  overallRating () {
    return this.tracks.reduce((a, b) => {
      return a.rating + b.rating;
    });
  }
  totalDuration () {
    return this.tracks.reduce((a, b) => {
      return a.length + b.length;
    });
  }
}

const newPlaylist = new Playlist('My Playlist');
console.log(newPlaylist);

class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
}

const newLibrary = new Library('Library', 'Bryce');
console.log(newLibrary);

function addTrackToPlaylist(track, playlist) {
  playlist.tracks.push(track);
}

addTrackToPlaylist(trackOne, newPlaylist);
addTrackToPlaylist(trackTwo, newPlaylist);
console.log(newPlaylist);
console.log(newPlaylist.overallRating());
console.log(newPlaylist.totalDuration());

function addPlaylist(library, playlist) {
  library.playlists.push(playlist);
}

addPlaylist(newLibrary, newPlaylist);
console.log(newLibrary);
