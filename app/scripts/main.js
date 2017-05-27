$(document).ready(function() {
  $('#fullpage').fullpage({
  anchors: ['homePage','firstPage', 'secondPage', 'thirdPage'],
  slidesNavigation: true,
  scrollingSpeed: 600,
  responsiveWidth: 375,
  keyboardScrolling: true,
  afterResponsive: function(isResponsive){
}
});
});
