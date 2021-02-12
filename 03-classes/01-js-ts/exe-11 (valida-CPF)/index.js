(()=>{

  function cpfValidation(cpfStr){
    const cpf = cpfToArray(cpfStr)

    // verify repeted numbers (ex: 111.111.111-11)
    const validation1 =
    cpf.every((value, i , arr) => arr[++i] ? value === arr[i]: true)
    if(validation1) return false

    let validation2 = [...cpf];
    validation2.reverse().splice(0,2)
    validation2 = validation2.reduce((stack, value, i) => {
      return stack + (Number(value) * (i + 2))
    },0)
    validation2 = (validation2 * 10) % 11
    validation2 = validation2 === 10 ? 0 : validation2

    let validation3 = [...cpf]
    validation3.reverse().shift()
    validation3 = validation3.reduce((stack, value, i) => {
      return stack + (Number(value) * (i + 2))
    },0)
    validation3 = (validation3 * 10) % 11
    validation3 = validation3 === 10 ? 0 : validation3

    return (
      validation2 === Number(cpf[9])
      &&
      validation3 === Number(cpf[10])
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

  function createResultElement(isValid, cpfStr){
    const resultElem = document.createElement("div")
    resultElem.classList = `flex-items`
    resultElem.innerHTML = `
      <div class="validation val-${isValid} container col-s12-m8-l6">
        <h4>
          CPF ${isValid ? "Válido": "Inválido"}
        </h4>
        <p>
          <b>${cpfStr}</b> é um CPF ${isValid ? "válido": "inválido"}
        </p>
      </div>
      `
    return resultElem
  }

   function setResultElement(cpfStr){
     const IsValidCpf = cpfValidation(cpfStr)
     const resultContainer = document.querySelector(".result-container")
     const resultElem = createResultElement(IsValidCpf, cpfStr)
     resultContainer.innerHTML = ""
     resultContainer.appendChild(resultElem)
   }

  document.querySelector("#cpfField")
    .addEventListener("input",function(e){
        e.target.value = cpfFormatter(e.target.value)
      })

  document.querySelector(".cpf-btn")
    .addEventListener("click", function(){
      const cpf = document.querySelector("#cpfField").value
      if(cpf.length < 20) return alert("Número Incompleto")
      setResultElement(cpf)
    })

})();
