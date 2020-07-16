$(document).ready(opcionMenu);

var contador=1;
function opcionMenu()
{
    $('.iconomenu').click(function(){

        //console.log("click");

        if(contador==1)
        {
            // el menu esta ocualto
            $('ul').animate({left:'5%'});
            contador=0;

        }
        else{
            // el menu esta visible
            $('ul').animate({left:'-95%'});
            contador=1;
        }


    });
}