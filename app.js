// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declarando la variable tipo array que almacenará los nombres de los amigos ingresados
let amigos = [];

/*Implementa una función para agregar amigos
Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.*/

function agregarAmigo(){
//  1.Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
    let amigo = document.getElementById("amigo").value;
/*  2.Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. 
    Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."*/
    if(amigo == ""){
        alert("Por favor, inserte un nombre.");
    }   else {
        //  3.Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
        amigos.push(amigo);
        }
//  4.Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
    document.getElementById("amigo").value = "";

    console.log(amigos);
}

