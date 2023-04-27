// Obtener los elementos del DOM
const form = document.getElementById('poem-form');
const poemList = document.getElementById('poem-list');

// Obtener los poemas guardados en localStorage o inicializar un arreglo vacío
let poems = JSON.parse(localStorage.getItem('poems')) || [];

// Función para renderizar los poemas en la página
function renderPoems() {
  // Vaciar la lista de poemas
  poemList.innerHTML = '';

  // Iterar sobre los poemas y crear un elemento li para cada uno
  poems.forEach(poem => {
    const li = document.createElement('li');
    li.textContent = poem;
    poemList.appendChild(li);
  });
}

// Agregar un evento al formulario para guardar los poemas
form.addEventListener('submit', event => {
  // Prevenir que se envíe el formulario de manera predeterminada
  event.preventDefault();

  // Obtener el valor del textarea y limpiar los espacios en blanco al principio y al final
  const poemText = form.poem.value.trim();

  // Si el textarea no está vacío, agregar el poema al arreglo de poemas y renderizar los poemas en la página
  if (poemText !== '') {
    poems.push(poemText);
    localStorage.setItem('poems', JSON.stringify(poems));
    renderPoems();
  }

  // Limpiar el textarea
  form.poem.value = '';
});

// Renderizar los poemas al cargar la página
renderPoems();
