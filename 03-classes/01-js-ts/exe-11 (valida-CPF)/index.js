(()=>{

  function cpfIsValid(cpfStr){
    const cpf = cpfToArray(cpfStr)

    cpf.reduce((stack, item, i , arr)=>{
      return stack && arr[i] === arr[++i]
    }, true)

    let validation1 = [...cpf];
    validation1.reverse().splice(0,2)
    validation1 = validation1.reduce((stack, value, index) => {
      return stack + (Number(value) * (index + 2))
    },0)
    validation1 = (validation1 * 10) % 11
    validation1 = validation1 === 10 ? 0 : validation1

    let validation2 = [...cpf]
    validation2.reverse().splice(0,1)
    validation2 = validation2.reduce((stack, value, index) => {
      return stack + (Number(value) * (index + 2))
    },0)
    validation2 = (validation2 * 10) % 11
    validation2 = validation2 === 10 ? 0 : validation2

    return (
      validation1 === Number(cpf[9])
      &&
      validation2 === Number(cpf[10])
    )
  }

  function cpfFormatter(cpfStr){
    const cpf = cpfToArray(cpfStr)
    if(cpf.length > 3) cpf.splice(3,0," . ")
    if(cpf.length > 7) cpf.splice(7,0," . ")
    if(cpf.length > 11) cpf.splice(11,0," - ")
    return cpf.join("")
   }

   function cpfToArray(cpfStr){
     cpfStr = cpfStr.replace(/\D+/g,"")
     return Array.from(cpfStr)
   }

  document.querySelector("#cpfField")
    .addEventListener("input",function(e){
        e.target.value = cpfFormatter(e.target.value)
      })

  document.querySelector(".cpf-btn")
    .addEventListener("click", function(){
        const cpfStr = document.querySelector("#cpfField").value
        console.log(cpfIsValid(cpfStr));
      })
      
})();
