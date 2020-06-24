

let screenHeight = $(window).height();


$(window).scroll(function(){

     if( $(this).scrollTop() >= screenHeight/5 ){
          $(".watchFaces-container-wrapper").addClass("night-bkg");
          $(".watchFaces-container-wrapper").removeClass("day-bkg");
     }
     else{
          $(".watchFaces-container-wrapper").addClass("day-bkg");
          $(".watchFaces-container-wrapper").removeClass("night-bkg");
     }


     if( $(this).scrollTop() >= screenHeight){
          $(".watchFaces-container-wrapper").addClass("pos-abs")
          $(".watchFaces-container-wrapper").removeClass("pos-fixed")
     }
     else{
          $(".watchFaces-container-wrapper").removeClass("pos-abs")
          $(".watchFaces-container-wrapper").addClass("pos-fixed")
     }

     let angle = $(this).scrollTop()*18/100;

     if(angle >= 0 && angle <= 108){

          $(".watchFaces-container").css({"transform": `translate(-50%, -50%) rotateZ(${-$(this).scrollTop()*18/100}deg)`});
     }
});