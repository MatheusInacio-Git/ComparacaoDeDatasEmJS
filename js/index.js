// Função para comparar duas datas e retornar a maior
function verificarDatas() {
    var data1 = new Date(document.getElementById('data1comp').value);
    var data2 = new Date(document.getElementById('data2comp').value);

    if (data1 > data2) {
        document.getElementById('resultado').innerHTML = "A Data 1 é maior que a Data 2.";
    } else if (data1 < data2) {
        document.getElementById('resultado').innerHTML = "A Data 2 é maior que a Data 1.";
    } else {
        document.getElementById('resultado').innerHTML = "As datas são iguais.";
    }
}

// Função para calcular o intervalo entre duas datas
function obterIntervalo() {
    var data1 = new Date(document.getElementById('data1comp').value);
    var data2 = new Date(document.getElementById('data2comp').value);

    // Certifique-se de que data1 é sempre a data mais antiga
    if (data1 > data2) {
        var temp = data1;
        data1 = data2;
        data2 = temp;
    }

    var diferenca = Math.abs(data2 - data1);
    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    document.getElementById('resultado').innerHTML = "O intervalo entre as datas é de " + dias + " dias.";
}

// Função para retornar a data atual no formato hora:minuto - dia/mês/ano
function formatarDataAtual() {
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1; // Os meses começam do 0
    var ano = dataAtual.getFullYear();
    var hora = dataAtual.getHours();
    var minuto = dataAtual.getMinutes();

    document.getElementById('resultado').innerHTML = hora + ":" + minuto + " - " + dia + "/" + mes + "/" + ano;
}