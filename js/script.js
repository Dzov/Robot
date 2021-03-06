// When eyes button is clicked, toggle laser class on brain
$(".flash").click(function() {
  $(".brain").toggleClass('laser');
});

// When color button is clicked...
$(".color").click(function() {
  // assign each named color a random number 0-255
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  // Generate an RGBA value from red, green, blue
  var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
  
  //Assign randomRGBA to body's background color
  $("body").css("background", randomRGBA);
});

$(".moves").click(function() {
  $(".robot").toggleClass("robotDance");  
  $(".left").toggleClass("leftDance");
  $(".right").toggleClass("rightDance");
});