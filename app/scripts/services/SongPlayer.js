(function() {
     function SongPlayer() {
          var SongPlayer = {};
         
         var currentSong = null;
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
             
            if (currentSong !== song) {
            else if (currentSong === song) {
            if (currentBuzzObject.isPaused()) {
             currentBuzzObject.play();
            playSong(song);
         }
     };
                 
      
                 
        SongPlayer.pause = function(song) {
        currentBuzzObject.pause();
        setSong(song);
        song.playing = false;
 };
                 
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