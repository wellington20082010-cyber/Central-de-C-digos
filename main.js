let Resultado = "";
function Codificar() {
  Resultado = "";
  ConferirCodigos();
}

function Decodificar() {
  Resultado = "";
  ConferirCodigos();
}

function ConferirCodigos() {
  let Codigo = document.getElementById("codigo").value;
  
  if (Codigo == "Morse") {
    Morse();
  } else if (Codigo == "Binaro") {
    Binario();
  } else if (Codigo == "AlfabetoGalatico") {
    AlfabetoGalatico();
  }
}

function Morse(param) {
  let Texto = document.getElementById("campo1").value;
  
  fetch("caracteres.json")
    .then(resposta => resposta.json())
    .then(Caractere => {
      for (var i = 0; i < Texto.length; i++) {
        let X = Texto[i].toUpperCase();
        Resultado += Caractere.Morse[X];
      }
      document.getElementById("campo2").innerText = Resultado;
    });
}