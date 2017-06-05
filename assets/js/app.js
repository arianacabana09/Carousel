// $(".btn").click(function(){
//   console.log("ya funcionaaaaaaaaaaa");
// })

$( () => {
  // variables
  var time = 5000;
  var duration = 1000;
  var $show = $('.carousel');
  var $slide = $show.children();

  // slider por 5 segundos 
  $slide.eq(0).fadeIn(duration);

  setInterval(function(){
    $slide = $show.children();
    $slide.eq(0).fadeOut(duration, function(){
      $(this).appendTo($show);
    });
    $slide.eq(0).fadeIn(duration);
  }, time);
});

// izquierda o derecha
var $fotobox = $('.carousel'),
    $firstImg = $fotobox.find("img:first"),
    $lastImg = $fotobox.find("img:last");

$('#prev').on('tap click', function(){
   $fotobox.append($firstImg);
   $firstImg = $fotobox.find("img:first");
   $lastImg = $fotobox.find("img:last");
   $firstImg.css({'opacity' : '1'})
});

$('#next').on('tap click', function(){
   $fotobox.prepend($lastImg);
   $firstImg = $fotobox.find("img:first");
   $lastImg = $fotobox.find("img:last");
   $firstImg.css({'opacity' : '1'})
});
