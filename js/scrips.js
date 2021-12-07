let forma = document.getElementById("forma");
let color = document.getElementById("color");
let agregar_btn = document.getElementById("agregar-btn")

const generate_form = (id_edit) => {
    let res = tasks.find((e) => "edit-" + e.id == id_edit);
    if (res) {
task_detail_container.insertAdjacentHTML(
    "beforeend",
    `
      <div class="edit-form-container">
      <input id="title-task-edit" type="text" placeholder="nombre" value="${res.title}" />
      <textarea
        type="text"
        placeholder="nombre"
      >${res.description}</textarea>
      <button id="save-btn-edit">Guardar</button>
      </div>
    
  `
  );
  
  
console.log(forma.value)
console.log(color.value)