main();
function main() {
    const lista = [];

    document.getElementById('bt-salvar').addEventListener('click', salvar)
    document.querySelector('form').addEventListener('submit', submitEvent);


    function submitEvent(event) {
        event.preventDefault();
    }

    function salvar() {
        const nome = document.getElementById('id-nome').value;
        const sobrenome = document.getElementById('id-sobrenome').value;
        const peso = document.getElementById('id-peso').value;
        const altura = document.getElementById('id-altura').value;

        addPessoa({ nome, sobrenome, peso, altura })
    }

    function addPessoa(pessoa) {
        lista.push(pessoa)

        document.querySelector('.cls-list div table tbody').innerHTML = "";

        for (let i = 0; i < lista.length; i++) {
            let add = `
            <tr> <td>${lista[i].nome}</td>
            <td>${lista[i].sobrenome}</td>
            <td>${lista[i].peso}</td>
            <td>${lista[i].altura}</td> </tr>`;

            document.querySelector('.cls-list div table tbody').innerHTML += add;
        }
    }
}