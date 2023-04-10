// let boton = document.getElementById('boton');
// let texto = document.getElementById('respuesta');

// boton.onclick = function(){
//     alert(`Hola ${texto.value}`);
// } 
let check = document.getElementById('usuario');
let boton = document.getElementById('btn');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
// Nos traemos un objeto del DOM para revisar su contenido

// boton.addEventListener("click", ()=>{

//     let validarRadio = function(e){
//         if(!check.checked){
//             alert('Pida que lo recordemos, por fa');
//             e.preventDefault();
//         }
//     }
//     let validarTodo = function(e){
//       validarRadio(e);
//      }

// });

// boton.onclick = function(e){
//     if(nombre.value==""||apellido.value==""){
//         alert('Llene los campos, por fa ');
//         e.preventDefault();
//     }
//     if(!check.checked){
//         alert('Pida que lo recordemos, por fa');
//         e.preventDefault();
//     }
// }

// Le agregamos eventos al boton, en el que condicionamos lo que queremos que suceda dependiendo de los datos que proporcione el usuario
    boton.addEventListener("click", e => {
        if(nombre.value==0||apellido.value==0){
            alert('Llene los campos, por fa ');
            e.preventDefault();
        }
        // else if(((nombre.value!=0||apellido.value!=0))&&(!check.checked)){
        //     alert('Pida que lo recordemos, por fa');
        //     e.preventDefault();
        // }
        if(!check.checked){
          alert('Pida que lo recordemos, por fa');
          e.preventDefault();
        }
        if((nombre.value!=0&&apellido.value!=0)&&(check.checked)){
            alert('Hola '+nombre.value + " "+ apellido.value);
        }
});

    

     