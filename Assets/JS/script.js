
let screenHeight = ($(window).height());


$(window).scroll(function(){


     if( $(this).scrollTop() >= screenHeight/6 )
          $(".hero-inner").css("background-color", "transparent");
     else
          $(".hero-inner").css("background-color", "white");


     let angle = $(this).scrollTop()*18/100;

     if(angle >= 0 && angle <= 108){

          $(".watchFaces-container").css({"transform": `translate(-50%, -10%) rotateZ(${-$(this).scrollTop()*18/100}deg)`});
     }
});