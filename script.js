const form = document.querySelector("form");
form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const nom = document.querySelector("[name=nombre]").value;
  const ape = document.querySelector("[name=apellido]").value;
  const eml = document.querySelector("[name=email]").value;
  const com = document.querySelector("[name=comentario]").value;
  let acept = document.querySelector(".aceptado");
  let rejeated = document.querySelector(".rechazado");
  if (
    (nom.length < 46 && nom != parseFloat(nom) ) &&
    (ape.length < 46 && nom != parseFloat(nom) ) &&
    eml.length < 31 &&
    com.length < 300
  ) {
    acept.style.display = "block";
    rejeated.style.display = "none";
  } else if (nom.length === 0 && ape.length === 0 && eml.length === 0) {
    acept.style.display = "none";
    rejeated.style.display = "block";
  } else {
    acept.style.display = "none";
    rejeated.style.display = "block";
  }
});
