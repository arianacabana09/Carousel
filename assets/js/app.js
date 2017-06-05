// $(".btn").click(function(){
//   console.log("ya funcionaaaaaaaaaaa");
// })

$( () => {
  var time = 5000;
  var duration = 1000;
  var $show = $('.carousel');
  var $slide = $show.children();

  $slide.eq(0).fadeIn(duration);

  setInterval(function(){
    $slide = $show.children();
    $slide.eq(0).fadeOut(duration, function(){
      $(this).appendTo($show);
    });
    $slide.eq(0).fadeIn(duration);
  }, time);
});
