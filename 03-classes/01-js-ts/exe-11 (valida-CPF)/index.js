(()=>{

  function cpfValidator(cpfString){
    const cpf = Array.from(cpfString.replace(".", ""))
    console.log(cpf);
  }

  function cpfBtnClick(){
    const cpfField = document.getElementById("cpfField")
    cpfValidator(cpfField.value)
  }

  function cpfInputFormatter(){
    const cpfField = document.getElementById("cpfField")
    //cpfField.value = cpfField.value.
  }

  document.addEventListener("click",cpfBtnEvent)










})();
