import real from "./real";
import date from "./date";
const divMain = document.querySelector(".main");
const divAlert = document.querySelector(".main-alert-error");

async function searchOrder() {
  const numeroPedido = document.getElementById("numeroPedido").value;
  const spinner = document.getElementById("spinner");

  spinner.style.display = "flex";
  divAlert.style.display = "none";
  divMain.style.display = "none";

  const response = await fetch(
    "https://api.jsonbin.io/b/5eeea63e2406353b2e098ea4"
  );

  const data = await response.json();

  spinner.style.display = "none";
  divAlert.style.display = "flex";
  divMain.style.display = "flex";

  const encomendas = data.encomendas;

  const retorno = encomendas.find(
    (encomendas) => encomendas.numero === numeroPedido.toUpperCase()
  );

  addData(retorno);
}

document.getElementById("search").addEventListener("click", searchOrder);

function addData(data) {
  const nameClient = document.getElementById("nameClient");
  const dateOrder = document.getElementById("dateOrder");
  const priceOrder = document.getElementById("priceOrder");
  const situationOrder = document.getElementById("situationOrder");
  if (data) {
    divMain.style.display = "flex";
    divAlert.style.display = "none";
    nameClient.innerHTML = data.id + " - " + data.cliente.nome;
    dateOrder.innerHTML = date(data.data);
    priceOrder.innerHTML = real(data.valor);
    situationOrder.innerHTML = data.entregue ? "Entregue" : "Entregar";
  } else {
    divMain.style.display = "none";
    divAlert.style.display = "block";
  }
}
