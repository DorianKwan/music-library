const librarySchema = {
  name: 'Basic library',
  creator: 'Kwan',
  tracks: {},
  playlists: []
};

const playlistSchema = {
  name: 'Basic playlist',
  tracks: [],
  overallRating: function x() {},
  totalDuration: function y() {}
};

const trackSchema = {
  title: 'name',
  rating: 1,
  length: 123
};

function track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

const newTrack = new track('Hypnotize', 5, 239);
console.log(newTrack);
const trackTwo = new track('Machine Gun Funk', 5, 261);
console.log(trackTwo);

function playlist(name, tracks) {
  this.name = name;
  this.tracks = tracks;
}

const newPlaylist = new playlist('My Playlist', [newTrack, trackTwo]);
console.log(newPlaylist);

function library(name, creator, playlists) {
  this.name = name;
  this.creator = creator;
  this.playlists = playlists;
}

const newLibrary = new library('Library', 'Bryce', [newPlaylist]);
console.log(newLibrary);
