// GLOBAL VARIABLES
const TABLETSIZE = 767;

/************************************************************
 ************************************************************
 ********************* WINDOW PROPERTIES ******************** 
 ************************************************************
*************************************************************/
$(window).on('resize', function () {
 if (window.innerWidth > TABLETSIZE) {
  $('#myNavbar').addClass('udip-smooth-transition').collapse('hide');
 }
})

// $(window).load(function () {
//  jQuery('#udip-about').click();
//  return false;
// });

// DOM PROPERTIES
$(document).ready(function () {


 /************************************************************
  ************************************************************
  ****************** NAVBAR CSS ON HOMEPAGE ****************** 
  ************************************************************
 *************************************************************/
 $('a[href^="#page"]').on('click', function () {
  $('.navbar-inverse').css('a:active', 'red !important');
 });


 /************************************************************
  ************************************************************
  ********************* COLLAPSE BUTTON  ********************* 
  ************************************************************
 *************************************************************/

 // Local Variables
 var myMainProfile = '#udip-header .display-tc, .udip-cover .display-tc';
 var spanIconBar = 'span.icon-bar';
 var myNavbar = '.navbar-inverse + .container';
 var myNavbar = '#myNavbar';
 var udipVfx1 = '.udip-vfx1';
 var navFirstItem = '#myNavbar ul li:first-child';

 // When Collapse button is shown
 $(myNavbar).on('shown.bs.collapse', function () {
  $(myMainProfile).css('vertical-align', 'bottom');
  $(spanIconBar).css('display', 'none');
  $(spanIconBar).siblings(':last').css('display', 'block');
  // $(udipVfx1).css('display', 'block');
  // $(udipVfx1).addClass('special-border');
  $(this).addClass('udip-smooth-transition');
 });

 // When Collapse button is hidden
 $(myNavbar).on('hidden.bs.collapse', function () {
  $(myMainProfile).css('vertical-align', 'middle');
  $(spanIconBar).css('display', 'block');
  $(spanIconBar).siblings(':last').css('display', 'none');
  // $(myNavbar).css('margin-top', '5rem');
  // $(udipVfx1).css('display', 'none');
  // $(udipVfx1).removeClass('special-border');
  // $(this).removeClass('topBotBorderWhite udip-smooth-transition');
  $(this).addClass('udip-smooth-transition');
 });


 /************************************************************
  ************************************************************
  *********************** SCROLL LINK ************************ 
  ************************************************************
 *************************************************************/
 // if ($(navFirstItem).hasClass('active')) {
 //  $('.header').css('background', 'none');
 // }
 $('#mainNav').onePageNav({
  currentClass: 'active',
  changeHash: false,
  scrollSpeed: 950,
  scrollThreshold: 0.2,
  filter: '',
  easing: 'swing',
  begin: function () {
  },
  end: function () {
   if (!$('#myNavbar ul li:first-child').hasClass('active')) {
    $('.header').addClass('addBg');
    // $('#myNavbar ul li:first-child').addClass('active');
   } else {
    $('.header').removeClass('addBg');
    // $('#myNavbar ul li:first-child').removeClass('active');
   }

  },
  scrollChange: function ($currentListItem) {
   if (!$('#myNavbar ul li:first-child').hasClass('active')) {
    $('.header').addClass('addBg');
    // $('#myNavbar ul li:first-child').addClass('active');
   } else {
    $('.header').removeClass('addBg');
    // $('#myNavbar ul li:first-child').removeClass('active');
   }
  }
 });
});


