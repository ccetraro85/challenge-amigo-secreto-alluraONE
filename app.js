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
    //Agrego la 2da función al final de la 1ra para que dentro de la acción del botón se imprima la lista. 
    agregarAmigoImprimeLista();
    return;
}

/*Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. 
Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.*/

function agregarAmigoImprimeLista(){
//  1.Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
    let lista = document.getElementById("listaAmigos");
//  2.Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
    lista.innerHTML = "";
//  3.Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    for (let i = 0; i < amigos.length; i++){
        let bullet = document.createElement("li");
//  4.Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
        bullet.textContent = amigos[i];
        lista.appendChild(bullet);
        }
    return;
}

/*Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. 
Usa Math.random() y Math.floor() para obtener un índice aleatorio.*/
function sortearAmigo(){
//  1.Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    if (amigos.length === 0){
        alert("Primero ingrese los nombres de sus amigos")
        return;
    }   else {
//  2.Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
        let indiceAmigoSecreto = Math.floor(Math.random() * amigos.length + 1) - 1;
        console.log(indiceAmigoSecreto);
//  3.Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
        let amigoSecreto = amigos[indiceAmigoSecreto];
        console.log(amigoSecreto);
//  4.Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = amigoSecreto;
        return resultado;
    }
}