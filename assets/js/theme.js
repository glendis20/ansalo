
function theme(tema){
    limpiarTema();
    let cuerpo = document.getElementById('cuerpo');
    cuerpo.classList.add(tema);
    localStorage.setItem("tema", tema);
    console.log('el tema es' + localStorage.getItem("tema"));
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

}

function defecto(){
    limpiarTema();
    let cuerpo = document.getElementById('cuerpo');
    cuerpo.classList.add('defecto');
    document.getElementById('letras').value="";
    document.getElementById('numeros').value="";
}
