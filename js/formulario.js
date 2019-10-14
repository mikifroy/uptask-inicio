eventListeners();



function eventListeners(){
    document.querySelector('#formulario').addEventListener('submit', validarRegistro);

}

function validarRegistro(e){
    e.preventDefault();
    

    var usuario = document.querySelector('#usuario').value,
        password = document.querySelector('#password').value,
        usuario = document.querySelector('#tipo').value;

        if(usuario === '' || password === ''){
            //la validacion fallo
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Ambos campos son obligatorios.',
                
              })
        }else{
            //ambos datosson correctos, llamaraejecutar Ajax

            //datos que se envian al servidor
            var datos = new FormData();
            datos.append('usuario', usuario);
            datos.append('password', password);
            datos.append('accion', tipo);
            
        }
}