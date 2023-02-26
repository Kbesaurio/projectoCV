document.getElementById("botonDato").addEventListener('click', function(){
    document.getElementById("datoUsuario").style.display = 'block';
})

document.getElementById("botonocultaus").addEventListener('click', function(){
    document.getElementById("datoUsuario").style.display = 'none';
})

document.getElementById("botonExpLab").addEventListener('click', function(){
    document.getElementById("datoLab").style.display = 'block';
})

document.getElementById("ocultarLab").addEventListener('click', function(){
    document.getElementById("datoLab").style.display = 'none';
    
})

document.getElementById("botonEstudio").addEventListener('click', function(){
    document.getElementById("datoEs").style.display = 'block';
})

document.getElementById("ocultarEs").addEventListener('click', function(){
    document.getElementById("datoEs").style.display = 'none';
})