function() {
   function AlbumCtrl(Fixtures) {
     // this.albumData = albumPicasso;
     this.albumData = Fixtures.getAlbum();
   };
 
   angular
     .module('blocJams')
     .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
 })();