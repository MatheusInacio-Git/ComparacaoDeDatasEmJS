DATAS EM JS :
Esse Projeto contém três funções principais que permitem comparar duas datas, calcular o intervalo entre duas datas e formatar a data atual.

1. verificarDatas()

Esta função compara duas datas inseridas pelo usuário. Ela pega as datas dos campos de entrada 'data1comp' e 'data2comp', converte-as em objetos Date do JavaScript e as compara. Se a Data 1 for maior que a Data 2, ela exibirá "A Data 1 é maior que a Data 2.". Se a Data 2 for maior, ela exibirá "A Data 2 é maior que a Data 1.". Se as duas datas forem iguais, ela exibirá "As datas são iguais.".

2. obterIntervalo()

Esta função calcula o número de dias entre duas datas inseridas pelo usuário. Assim como a função verificarDatas(), ela pega as datas dos campos de entrada 'data1comp' e 'data2comp'. Ela garante que a Data 1 seja a mais antiga trocando as datas, se necessário. Em seguida, ela calcula a diferença entre as duas datas em milissegundos, converte essa diferença em dias e exibe o resultado.

3. formatarDataAtual()

Esta função obtém a data e hora atuais, formata-as no formato "hora:minuto - dia/mês/ano" e exibe o resultado. Ela usa o objeto Date do JavaScript para obter a data e hora atuais e, em seguida, extrai o dia, mês, ano, hora e minuto. Note que ela adiciona 1 ao mês, já que os meses em JavaScript começam do 0.

Só baixar e abrir o arquivo index.html

