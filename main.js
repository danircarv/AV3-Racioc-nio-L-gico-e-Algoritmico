// a) Ler um vetor com as notas da avaliação 1 e outro com as notas da avaliação 2.
let N = parseInt(prompt("Quantas notas serão lidas em cada avaliação?"))
let AV1 = new Array(N)
for(let i = 0;i<N;i++){
    AV1[i] = parseFloat(prompt("Informe a " + (i+1) + "ª nota da AV1"))
}

let AV2 = new Array(N)
for(let i = 0;i<N;i++){
    AV2[i] = parseFloat(prompt("Informe a " + (i+1) + "ª nota da AV2"))
}

// b) Informar as maiores e menores notas de AV1 e AV2.

let maior1 = AV1[0];
let menor1 = AV1[0];

for (let i = 0; i < AV1.length; i++) {
    if (AV1[i] > maior1) {
        maior1 = AV1[i];
    } else if (AV1[i] < menor1) {
        menor1 = AV1[i];
    }
}

document.write("A maior nota da AV1 é: " + maior1 + "<br>");
document.write("A menor nota da AV1  é: " + menor1 + "<br>");

let maior2 = AV2[0];
let menor2 = AV2[0];

for (let i = 0; i < AV2.length; i++) {
    if (AV2[i] > maior2) {
        maior2 = AV2[i];
    } else if (AV2[i] < menor2) {
        menor2 = AV2[i];
    }
}

document.write("A maior nota da AV2 é: " + maior2 + "<br>");
document.write("A menor nota da AV2  é: " + menor2 + "<br>");

// c) Calcular a média de notas da turma. A média da deverá ser apresentada da menor para a maior

// Calculando a media
let media = new Array(N)
for(let i = 0;i<N;i++){
    media[i] = ((AV1[i] + AV2[i]) / 2).toFixed(1);
}

// Ordenação do vetor media pelo método bolha

for (let i = 0; i < media.length - 1; i++) {
    for (let j = 0; j < media.length - i - 1; j++) {
        if (media[j] > media[j + 1]) {
            let aux = media[j];
            media[j] = media[j + 1];
            media[j + 1] = aux;
        }
    }
}

document.write(media);


