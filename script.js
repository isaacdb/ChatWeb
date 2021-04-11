function scrollToBottom () {
  var myElement = document.getElementById('boxMensagens');
  myElement.scrollTop = myElement.scrollHeight;
}

function criaItem(text) {
  const div = document.createElement("div");
  div.className = "form-mensagem-voce"

  const labelName = document.createElement("label");
  labelName.innerText = "Você";
  labelName.className = "lb-mensagem-voce";

  const divmsg = document.createElement("div");
  divmsg.className = "text-mensagem-voce";
  const p = document.createElement("p");
  p.innerText = text;

  divmsg.appendChild(p);

  div.appendChild(labelName);
  div.appendChild(divmsg);

  const mensagens = document.getElementById("boxMensagens");
  mensagens.appendChild(div);
}

function criaItemForm() {
  const inputText = document.getElementById("input-msg");
  if(inputText.value){
  criaItem(inputText.value);
  scrollToBottom();
  inputText.value = "";
  }
}

const formAdd = document.getElementById("formAdd");
formAdd.addEventListener("submit", function (event) {
  event.preventDefault();

  criaItemForm();
});
