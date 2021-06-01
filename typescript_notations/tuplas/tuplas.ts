//  A tupla junta valores de vários tipos, uma coleção heterogênea de valores
// Número fixo de elementos

let pessoa: [string, string, number]

pessoa = ["Jobson Carlos", "Cloud Advocate", 33]

// Acessar valor da tupla

pessoa[1]

// Atribuir tuplas

// Especifica que os demais valores vão ser string, já que tupla é tipado
// Isso seria uma lista homogênea de tupla
let listaFrutas: [string, ...string[]] = ["Manga", "Banana", "Jaiba", "Cremosa", "Conde fruit"]

console.log(...listaFrutas)

let pessoa2: [nome: string, profissao: string, idade: number] = ["Jobson Carlos", "Cloud Advocate", 33]

// Lista heterogênea tupla

let listaFrutas2: [number, boolean, ...string[]] = [12, true, ...listaFrutas]

console.log(listaFrutas2)

// Nos params eu passo tipos primitivos de tuplas, não de arrays
function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades]
}


let resultado = listarPessoas(["Jorge", "RAMUS"], [24, 39]);

console.log(resultado)

// Tipo nome, pode receber ou primeiro item ou segundo item
type Nome =
    | [primeiroNome: string, sobrenome: string]
    | [primeiroNome: string, nomeMeio: string, sobrenome: string]


function criarPessoa(...nome: Nome) {
    return [...nome]
}

console.log(criarPessoa("Ronaldo", "Gersando Kolbes"))