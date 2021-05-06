function comprar() {
  let gansito = true;
  let chocoBar = true;

  if (gansito === true ){
    alert("toma tu gansito");
  }
  //|| = ó / && = y
  if (chocoBar === true && gansito !== true) {
      alert("toma tu barra de chocorramo");
  } 
  if(chocoBar === false && gansito === false){
      alert("no hay ninguno");
  }
}
