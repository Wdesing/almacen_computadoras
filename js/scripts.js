let Valorcompra = 0;
let valorpcs = 820000;

function Calcular(){

        const  cantidad= document.getElementById('idCant').value;
 
        if(cantidad>=2 && cantidad<=4){
            valorDescuentoa= Valorcompra * 0.15;
            Valorcompra = cantidad * 820000;
            document.getElementById('ValorCompra').value = Valorcompra;
            document.getElementById('valorDescuento').value = Valorcompra * 0.15;
            document.getElementById('total').value = Valorcompra - (Valorcompra * 0.15);
            document.getElementById('mensaje').innerHTML = 'Su descuento es del 15%';

        
        }else if(cantidad>4 && cantidad<=8){
            valorDescuentob= Valorcompra * 0.25;
            Valorcompra = cantidad * 820000;
            document.getElementById('ValorCompra').value = Valorcompra;
            document.getElementById('valorDescuento').value = Valorcompra * 0.25;
            document.getElementById('total').value = Valorcompra - (Valorcompra * 0.25);
            document.getElementById('mensaje').innerHTML = 'Su descuento es del 25%';

        }else if(cantidad>8 && cantidad<=12){
            valorDescuentoc= Valorcompra * 0.35;
            Valorcompra = cantidad * 820000;
            document.getElementById('ValorCompra').value = Valorcompra;
            document.getElementById('valorDescuento').value = Valorcompra * 0.35;
            document.getElementById('total').value = Valorcompra - (Valorcompra * 0.35);
            document.getElementById('mensaje').innerHTML = 'Su descuento es del 35%';

        }else if(cantidad>12 ){
            Valorcompra = cantidad * 820000;
            document.getElementById('ValorCompra').value = Valorcompra;
            document.getElementById('valorDescuento').value = 0;
            document.getElementById('total').value = Valorcompra;
            document.getElementById('mensaje').innerHTML = 'No hay descuento para esta compra';
        }

   }


   function mostrarOcultar(id){
         var elemento = document.getElementById(id);
            if(!elemento) {
                 return true;}
            }
            if (elemento.style.display == "none") {
               elemento.style.display = "block"
            
            } else { elemento.style.display = "none"
        } return true;
       
    