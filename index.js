{
  /* <div class="table-content">
  
  <section>Cabecera 1</section>
  <section>Cabecera 2</section>
  <section>Cabecera 3</section>
  
  </div> */
}
const tableData = [
  { content: ["País", "Capital", "Idioma"] },
  { content: ["Argentina", "Buenos Aires", "Castellano"] },
  { content: ["Chile", "Santiago de Chile", "Castellano"] },
  { content: ["Perú", "Lima", "Castellano"] },
  { content: ["Venezuela", "Caracas", "Castellano"] },
  { content: ["Estados unidos", "Washington", "Inglés"] },
];
function fillTable() {
  // dselecionamos la etiqueta con la class table-container
  const container_table = document.getElementsByClassName("table-container")[0];

  for (let index = 0; index < tableData.length; index++) {
    // Creamos un div
    const div = document.createElement("div");
    div.classList.add("table-content");

    ///Segundo recorrido
    for (let key = 0; key < tableData[index].content.length; key++) {
      const text = tableData[index].content[key];
      // Creamos secciones
      const section = document.createElement("SECTION");

      /// Creamos el texto
      const textNode = document.createTextNode(text);

      // Llenar el texto en la etiqueta section
      section.appendChild(textNode);
      div.appendChild(section);
      //   console.log(div);
    }

    /// Muestra el contenido en el html
    container_table.appendChild(div);
  }

  //   console.log(container_table);
}
fillTable();

function addMoreContent() {
  // selecionamos el botón
  const button = document.getElementById("buttonAdd");

  // Escuchar el evento click
  button.addEventListener("click", function () {
    const container_input_text = document.getElementById("inputs").children;
    const newArrayContent = [];
    const newTableData = [];
    // Recogemos el valor de cada input
    for (let index = 0; index < container_input_text.length; index++) {
      // Verificamos que todos los valores estén llenos
      if (container_input_text[index].value === "") {
        alert("Llenar todos los campos");
        return;
      }

      /// Agregamos el contenido al arreglo
      newArrayContent.push(container_input_text[index].value);
      container_input_text[index].value = "";
    }
    newTableData.push({
      content: newArrayContent,
    });

    // Llenar nuevamente el DOM
    // dselecionamos la etiqueta con la class table-container
    const container_table = document.getElementsByClassName(
      "table-container"
    )[0];

    for (let index = 0; index < newTableData.length; index++) {
      // Creamos un div
      const div = document.createElement("div");
      div.classList.add("table-content");

      ///Segundo recorrido
      for (let key = 0; key < newTableData[index].content.length; key++) {
        const text = newTableData[index].content[key];
        // Creamos secciones
        const section = document.createElement("SECTION");

        /// Creamos el texto
        const textNode = document.createTextNode(text);

        // Llenar el texto en la etiqueta section
        section.appendChild(textNode);
        div.appendChild(section);
        //   console.log(div);
      }

      /// Muestra el contenido en el html
      container_table.appendChild(div);
    }

    //   console.log(container_table);
  });
}
addMoreContent();
