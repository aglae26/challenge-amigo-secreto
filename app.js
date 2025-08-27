// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Almacena los nombres ingresados.
let amigos = []

// Función para agregar un amigo a la lista.
function agregarAmigo() {
  const input = document.getElementById('amigo')
  const nombreAmigo = input.value.trim()

  // Verifica que el input no esté vacío.
  if (nombreAmigo === '') {
    alert('Por favor, ingresa un nombre.')
    return
  }

  // Agrega el nombre del amigo al array.
  amigos.push(nombreAmigo)

  // Limpia el campo de entrada.
  input.value = ''
}


// Muestra la lista actualizada de amigos.
function actualizarLista() {
  const lista = document.getElementById('listaAmigos')
  lista.innerHTML = ''

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`
  }
}

// Sortea un amigo de la lista.
function sortearAmigo() {

  // Verifica que haya amigos en la lista.
  if (amigos.length === 0) {
    alert('No hay amigos en la lista para sortear.')
    return
  }

  // Genera un índice aleatorio.
  const indiceAleatorio = Math.floor(Math.random() * amigos.length)

  // Muestra el amigo sorteado.
  const amigoSorteado = amigos[indiceAleatorio]

  // Amigo sorteado
  const resultado = document.getElementById('resultado')
  resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`
}
