var indicador=0;

function cambiarImg()
{

    //console.log("Se ejecuta");
    var img1=document.getElementById("publicidad1");
    var img2=document.getElementById("publicidad2");
    var img3=document.getElementById("publicidad3");

    if(indicador%2==0)
    {
        // indicador es par
        img1.innerHTML="<center><img src='img2/camiseta1.jpg'></center>";
        img2.innerHTML="<center><img src='img2/camiseta2.jpg'></center>";
        img3.innerHTML="<center><img src='img2/camiseta3.jpg'></center>";
    }
    else{
        //indicadpr es impar
        img1.innerHTML="<center><img src='img2/1.jpg'></center>";
        img2.innerHTML="<center><img src='img2/2.jpg'></center>";
        img3.innerHTML="<center><img src='img2/3.jpg'></center>";

    }

    indicador=indicador+1; // contador
    
}

setInterval(cambiarImg,3000);