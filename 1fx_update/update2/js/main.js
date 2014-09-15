var gims = {
  front:{
    init: function() {
      var e = this;
 //       e.Slider();
        e.owlcarousel();
       e.inserticon();
    },
    Slider: function() {

        $('.slider').flexslider({
            animation: "fade",
            directionNav: false,
            controlNav: true   

        });
        
    },
    owlcarousel: function() {


      $("#main-slider").owlCarousel({

          navigation : true,
          slideSpeed : 300,
          paginationSpeed : 400,
          items : 1,
          autoPlay: true, 
          pagination : true,
          navigationText:  ["",""],
      });
      $(".slider-sm").owlCarousel({

          navigation : false,
          slideSpeed : 300,
          paginationSpeed : 400,
          items : 1,
          autoPlay: true, 
          pagination : true,
          navigationText:  ["",""],
      });


      $("#carousel-default").owlCarousel({

          navigation : true,
          slideSpeed : 300,
          paginationSpeed : 400,
          items : 4,
          autoPlay: true, 
          pagination : false,
          navigationText:  ["",""],
          });

      $("#carousel-secondary").owlCarousel({

          navigation : true,
          slideSpeed : 300,
          paginationSpeed : 400,
          items : 1,
          autoPlay: false, 
          pagination : false,
          navigationText:  ["",""],
          });  
      $("#carousel-tertiary").owlCarousel({

          navigation : true,
          slideSpeed : 300,
          paginationSpeed : 400,
          items : 1,
          autoPlay: false, 
          pagination : false,
          navigationText:  ["",""],
          });                

        
    }, 
    inserticon: function() {

       $('.owl-prev').append("<i class='fa fa-angle-left'></i>");
       $('.owl-next').append("<i class='fa fa-angle-right'></i>");
        
    }        
  


  }
  
}



