const iptPeso = document.querySelector('.ipt-peso');
const iptAltura = document.querySelector('.ipt-altura');
const divResult = document.querySelector('#imc-result');

function imc(peso, altura) {
    return peso / (altura ^ 2)
}

document.querySelector('.form-imc button').addEventListener('click', () => {
    const imc = Number(iptPeso.value) / (Number(iptAltura.value) ^ 2);
    let text = `O Resultado foi: ${imc.toPrecision(3)} <br>`;
    divResult.className = "container imc-result-n";

    switch (true) {
        case imc > 10 && imc < 18.5:
            text += `Voçê está abaixo de peso ideal`;
            break;
        case imc > 18.5 && imc < 24.9:
            text += ` Seu peso está ideal`;
            divResult.className = "container imc-result-p";
            break;
        case imc > 24.9 && imc < 29.9:
            text += `Voçê está com Sobrepeso`;
            break;
        case imc > 29.9 && imc < 34.9:
            text += `Voçê está com Obesidade Grau I`;
            break;
        case imc > 34.9 && imc < 39.9:
            text += `Voçê está com Obesidade Grau II`;
            break;
        case imc > 39.9 && imc < 70:
            text += `Voçê está com Obesidade Grau III`;
            break;
        default:
            text = "digite um valor válido!";
    };
    divResult.innerHTML = `${text}`

});