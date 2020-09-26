const ordenLetras = 'ABCDEFGHIJ';


function theme(tema){
    limpiarTema();
    let cuerpo = document.getElementById('cuerpo');
    cuerpo.classList.add(tema);
    localStorage.setItem("tema", tema);
}

function temaGuardado(){
    let color = localStorage.getItem("tema");
    if(color !== null && color !== undefined){
       /*let cuerpo = document.getElementById('cuerpo');
        cuerpo.classList.add(color);*/
        theme(color);
        
    }

}

function limpiarTema(){
    let cuerpo = document.getElementById('cuerpo');
    cuerpo.classList.remove('retro');
    cuerpo.classList.remove('dark');
    
}

function presionar(letra, numero){

    document.getElementById('letras').value=document.getElementById('letras').value+letra;
    document.getElementById('numeros').value=document.getElementById('numeros').value+numero;

    let letras  = document.getElementById('letras').value;
    let numeros = document.getElementById('numeros').value;

    let bandera = false;

    for (let indice = 0; indice < letras.length; indice ++)
    {
        if(ordenLetras.charAt(indice) !== letras.charAt(indice))
        {
            swal({
                title: "Empieza otra vez!",
                text: "El orden no es correcto!",
                icon: "error",
              });
              bandera = true;
              defecto();
        }
    }
        if (ordenLetras.length === letras.length && bandera !==true){
            swal({
                title: "Has cumplido con el reto",
                text: "El orden es correcto!",
                icon: "success",
              });
              defecto();
        }
}



function defecto(){
    limpiarTema();
    let cuerpo = document.getElementById('cuerpo');
    cuerpo.classList.add('defecto');
    document.getElementById('letras').value="";
    document.getElementById('numeros').value="";
}
