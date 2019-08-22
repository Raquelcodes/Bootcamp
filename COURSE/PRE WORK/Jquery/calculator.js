// JQUERY
$(document).ready(() => {
 
    //Addition
     
               $("#Add-button").click(function() {
                var a = $("#num1").val();
                var b = $("#num2").val();
                
                 $("#result").html(+a + +b); 
   })
   
   
      $(".calculator").onsubmit = "return false"  
   
   
   
   })
   