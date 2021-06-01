//  A tupla junta valores de vários tipos, uma coleção heterogênea de valores
// Número fixo de elementos
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var pessoa;
pessoa = ["Jobson Carlos", "Cloud Advocate", 33];
// Acessar valor da tupla
pessoa[1];
// Atribuir tuplas
// Especifica que os demais valores vão ser string, já que tupla é tipado
// Isso seria uma lista homogênea de tupla
var listaFrutas = ["Manga", "Banana", "Jaiba", "Cremosa", "Conde fruit"];
console.log.apply(console, listaFrutas);
var pessoa2 = ["Jobson Carlos", "Cloud Advocate", 33];
// Lista heterogênea tupla
var listaFrutas2 = __spreadArray([12, true], listaFrutas);
console.log(listaFrutas2);
// Nos params eu passo tipos primitivos de tuplas, não de arrays
function listarPessoas(nomes, idades) {
    return __spreadArray(__spreadArray([], nomes), idades);
}
var resultado = listarPessoas(["Jorge", "RAMUS"], [24, 39]);
console.log(resultado);
function criarPessoa() {
    var nome = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nome[_i] = arguments[_i];
    }
    return __spreadArray([], nome);
}
console.log(criarPessoa("Ronaldo", "Gersando Kolbes"));
