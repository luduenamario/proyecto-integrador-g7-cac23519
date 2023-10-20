// Función para realizar la búsqueda
function buscarLibros(query) {
	// Convertir la consulta a minúsculas para que sea insensible a mayúsculas y minúsculas
	const queryLower = query.toLowerCase();
  
	// Filtrar los libros que coinciden con la consulta
	const resultados = data_bookshop.filter((libro) => {
	// Comprobar si la consulta se encuentra en el título, autor, editorial o ISBN
	  return (
		libro.titulo.toLowerCase().includes(queryLower) ||
		libro.autor.toLowerCase().includes(queryLower) ||
		libro.editorial.toLowerCase().includes(queryLower) ||
		libro.isbn.includes(query)
	  );
	});
  
	return resultados;
  }
  
  // Función para mostrar los resultados en la página
  function mostrarResultados(resultados) {
	const resultadoContainer = document.getElementById("resultados");
  
	// Limpia los resultados anteriores
	resultadoContainer.innerHTML = "";
  
	if (resultados.length === 0) {
	  resultadoContainer.textContent = "No se encontraron resultados.";
	} else {
	  resultados.forEach((libro) => {
		// Crea un elemento para mostrar el libro
		const elementoLibro = document.createElement("div");
		elementoLibro.classList.add("libro");
		elementoLibro.innerHTML = `
		  <img src="${libro.imagen}" alt="${libro.titulo}">
		  <h3>${libro.titulo}</h3>
		  <p>Autor: ${libro.autor}</p>
		  <p>Editorial: ${libro.editorial}</p>
		  <p>ISBN: ${libro.isbn}</p>
		  <p>Precio: $${libro.precio.toFixed(2)}</p>
		`;
  
		// Agrega el elemento del libro al contenedor de resultados
		resultadoContainer.appendChild(elementoLibro);
	  });
	}
  }
  
  // Escuchar el evento de búsqueda en el formulario
  const formularioBusqueda = document.querySelector(".busqueda");
  formularioBusqueda.addEventListener("submit", (e) => {
	e.preventDefault(); // Evita que se recargue la página
  
	const busquedaInput = document.getElementById("busqueda");
	const query = busquedaInput.value;
  

	const resultados = buscarLibros(query);
  
	// Muestra los resultados
	mostrarResultados(resultados);
  });
  