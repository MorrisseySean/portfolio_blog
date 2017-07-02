// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
/* global $ */

$(document).ready(function(){
    $(".slideshow > div:gt(0)").hide();
    $('.hidden-text').hide();
    
    setInterval(function() { 
        $('.slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.slideshow');
        }
    ,  5000);
    
    $("#who-block").hover(
        function(){
            $('#who-hover').fadeOut(1000);
            $('#who-text').stop( true, true ).fadeIn(2000);
        },
        function(){
            $('#who-hover').stop( true, true ).fadeIn(1000);
            $('#who-text').stop( true, true ).fadeOut(1000);
        }
    );
    
    $("#what-block").hover(
        function(){
            $('#what-hover').fadeOut(1000);
            $('#what-text').stop( true, true ).fadeIn(2000);
        },
        function(){
            $('#what-hover').stop( true, true ).fadeIn(1000);
            $('#what-text').stop( true, true ).fadeOut(1000);
        }
    );
});