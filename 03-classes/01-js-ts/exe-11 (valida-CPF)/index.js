(()=>{

  function cpfValidator(cpfString){
    
  }

  function cpfFormatter(cpfNumberStr){
    cpfNumberStr = cpfNumberStr.replaceAll(/\D+/g,"")
    const cpfNumber = Array.from(cpfNumberStr)
    if(cpfNumber.length > 3) cpfNumber.splice(3,0," . ")
    if(cpfNumber.length > 7) cpfNumber.splice(7,0," . ")
    if(cpfNumber.length > 11) cpfNumber.splice(11,0," - ")
    return cpfNumber.join("")
  }

  document.addEventListener("click",function(){
    const cpfField = document.querySelector("#cpfField")
    cpfValidator(cpfField.value)
  })

  document.addEventListener("input",function(e){
    e.target.value = cpfFormatter(e.target.value)
  })









})();
