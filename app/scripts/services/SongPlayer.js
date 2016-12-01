(function() {
     function SongPlayer($rootScope, Fixtures) {v
        var SongPlayer = {};
        
        var currentAlbum = Fixtures.getAlbum();
         
         
    
    var stopSong = function(song) {
         stopSong(song);
       } else {
         var song = currentAlbum.songs[currentSongIndex];
         setSong(song);
         playSong(song);
       }
     };
 
     // @function next
     // @desc skip to next song
 
    SongPlayer.next = function() {
       var currentSongIndex = getSongIndex(SongPlayer.currentSong);
       currentSongIndex++;
       if (currentSongIndex === currentAlbum.songs.length) {
         // currentBuzzObject.stop();
         // SongPlayer.currentSong.playing = null;
         stopSong(song);
         
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
           SongPlayer.setVolume = function(volume) {
       if (currentBuzzObject) {
         currentBuzzObject.setVolume(volume);
       }
      SongPlayer.volume = volume.toFixed(0);
     };
           
        var playSong = function(song) {
        currentBuzzObject.play();
        song.playing = true;
     };
         SongPlayer.currentTime = null;
          
           SongPlayer.volume = 50;
           
         SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
             
            if (currentSong !== song) {
            else if (currentSong === song) {
            if (currentBuzzObject.isPaused()) {
             currentBuzzObject.play();
            playSong(song);
         }
     };
          
        SongPlayer.setCurrentTime = function(time) {
       if (currentBuzzObject) {
         currentBuzzObject.setTime(time);
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
            
            currentBuzzObject.bind('timeupdate', function() {
         $rootScope.$apply(function() {
           SongPlayer.currentTime = currentBuzzObject.getTime();
         });
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
         factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
 })();