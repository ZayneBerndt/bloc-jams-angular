(function() {
     function SongPlayer(Fixtures) {
        var SongPlayer = {};
        
        var currentAlbum = Fixtures.getAlbum();
         
         
    
    var stopSong = function(song) {
        // currentBuzzObject.stop();
 +        // SongPlayer.currentSong.playing = null;
 +        stopSong(song);
 +      } else {
 +        var song = currentAlbum.songs[currentSongIndex];
 +        setSong(song);
 +        playSong(song);
 +      }
 +    };
 +
 +    // @function next
 +    // @desc skip to next song
 +
 +    SongPlayer.next = function() {
 +      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
 +      currentSongIndex++;
 +      if (currentSongIndex === currentAlbum.songs.length) {
 +        // currentBuzzObject.stop();
 +        // SongPlayer.currentSong.playing = null;
 +        stopSong(song);
         
     var getSongIndex = function(song) {
     return currentAlbum.songs.indexOf(song);
 };
         
        SongPlayer.currentSong = null;
         /**
 * @desc Buzz object audio file
 * @type {Object}
 */
         var currentBuzzObject = null;
         
         /**
 * @function setSong
 * @desc Stops currently playing song and loads new audio file as currentBuzzObject
 * @param {Object} song
 */
         
        var playSong = function(song) {
        currentBuzzObject.play();
        song.playing = true;
     };
         
         SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
             
            if (currentSong !== song) {
            else if (currentSong === song) {
            if (currentBuzzObject.isPaused()) {
             currentBuzzObject.play();
            playSong(song);
         }
     };
                 
      
                 
        SongPlayer.pause = function(song) {
        song = song || SongPlayer.currentSong;
        currentBuzzObject.pause();
        setSong(song);
        song.playing = false;
 };
                
        SongPlayer.previous = function() {
     var currentSongIndex = getSongIndex(SongPlayer.currentSong);
     currentSongIndex--;
                
        if (currentSongIndex < 0) {
         currentBuzzObject.stop();
         SongPlayer.currentSong.playing = null;
         } else {
         var song = currentAlbum.songs[currentSongIndex];
         setSong(song);
         playSong(song);
     }
                 
         currentBuzzObject = new buzz.sound(song.audioUrl, {
             formats: ['mp3'],
             preload: true
         });
                 
            currentSong = song;
 
         currentBuzzObject.play(); 
        song.playing = true;
        }
     };
          return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();