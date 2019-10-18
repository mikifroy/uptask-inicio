
eventListeners();



function eventListeners(){
    document.querySelector('#formulario').addEventListener('submit', validarRegistro);

}

function validarRegistro(e){
    e.preventDefault();
    

    var usuario = document.querySelector('#usuario').value,
        password = document.querySelector('#password').value,
        tipo = document.querySelector('#tipo').value;

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

          //llamado ajax

          var xhr = new XMLHttpRequest();
          //abrir la conexion

          xhr.open('POST', 'inc/modelos/modelo-admin.php', true);

          //retorno de datos

          xhr.onload = function(){
            if (this.status === 200){
                console.log(JSON.parse(xhr.responseText));

            } 
          }

          //enviar la peticion.
          xhr.send(datos);

            
        }
}