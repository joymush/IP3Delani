 $(document).ready(function(){
     $(".image1").click(function(){
         $(".image1").hide(1200);
         $(".p1").toggle(1200);
         $(".p1").show(1200);
 })
 $(".p1").click(function(){
   $(".p1").hide(1200);
   $(".image1").toogle(1200);
   $(" image1").show(1200);
   });
 });
 $(document).ready(function(){
     $(".image2").click(function(){
     $(".image2").hide(1200);
     $(".p2").toggle(1200);
     $(".p2").show(1200);
     })
     $(".p2").click(function(){
        $(".p2").hide(1200);
        $(".image2").toogle(1200);
        $(".image2").show(1200);
   });
 })
$ (document).ready(function(){
     $(".images3").click(function(){
         $(".images3").hide(1200);
         $(".p3").toggle(1200);
         $(".p3").show(1200);
    })
    $(".p3").click(function(){
        $(".p3").hide(1200);
        $(".image3").toggle(1200);
        $(".image3").show(1200);
    });
});
$(document).ready(function(){
    $('.text').hover(function () {
    $(this).animate{opacity:'1'});
    },
    function () {
    $(this).animate({opacity:'0'});
})
});
$(document).ready(function() {
    $('#submission').submit(function(event){
        var display1= $('input:first').val();
        var display2= $('input#mail').val();
        if(display1 && display2 != ''){
            alert ('Thank you ' + display1 + ' your subscription is well received');
        }else {
            alert ('Invalid input');
        }
        event.preventDefault();
    })
}); 

 
