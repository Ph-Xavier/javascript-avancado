const campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor"),
];

const tbody = document.querySelector("table tbody");
const formulario = document.querySelector(".form");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let tr = document.createElement("tr");

  campos.forEach(function (campo) {
    let td = document.createElement("td");
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  let tdVolume = document.createElement("td");
  tdVolume.textContent = campos[1].value * campos[2].value;
  tr.appendChild(tdVolume);

  tbody.appendChild(tr);
});
