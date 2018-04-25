import $ from "jquery";
import jQueryBridget from "jquery-bridget";
import Flickity from "flickity";
// make Flickity a jQuery plugin
jQueryBridget( 'flickity', Flickity, $ );
// now you can use $().flickity()

$(document).ready(function(){
  $('#wishlist a').click(function(e){
    e.preventDefault();
    $('main iframe').attr('src', 'wishlist/');
  })
});
