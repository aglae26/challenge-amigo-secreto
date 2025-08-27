// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Almacena los nombres ingresados.
let amigos = []

// Función para agregar un amigo a la lista.
function agregarAmigo() {
  const input = document.getElementById('nombreAmigo')

  // Verifica que el input no esté vacío.
  if (nombreAmigo === '') {
    alert('Por favor, ingresa un nombre.')
    return
  }
}

// Agrega el nombre del amigo al array.
amigos.push(input.value)

// Limpia el campo de entrada.
input.value = ''