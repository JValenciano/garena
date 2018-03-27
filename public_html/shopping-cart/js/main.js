$(document).ready(function(){
  $('#wishlist a').click(function(e){
    e.preventDefault();
    $('main iframe').attr('src', 'wishlist/');
  })
});
