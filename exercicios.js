// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt(`Qual é a altura`)// implemente sua lógica aqui
  const largura = prompt(`Qual é a largura`)
  const area = altura*largura

  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt(`Qual é o ano atual?`)// implemente sua lógica aqui
  const anoNasc = prompt(`Qual é o seu ano de nascimento?`)
  const idade = anoAtual-anoNasc

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const pesoAtual = prompt(`Qual é o peso atual?`)// implemente sua lógica aqui
  const alturaAtual = prompt(`Qual é a sua altura?`)

  return pesoAtual / (alturaAtual * alturaAtual)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt(`Qual é o seu nome?`)// implemente sua lógica aqui
  const idade = prompt(`Qual é a sua idade?`)
  const email = prompt(`Qual é o seu email?`)
    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)  

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  var cor1 = prompt("Qual é a sua primeira cor favorita?")// implemente sua lógica aqui
  var cor2 = prompt("Qual é a sua segunda cor favorita?")
  var cor3 = prompt("Qual é a sua terceira cor favorita?")

  var coresFavoritas = [cor1, cor2, cor3]

  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
    const stringMaiusc = string.toUpperCase() // implemente sua lógica aqui

  return stringMaiusc

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  return custo / valorIngresso // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  return string1.length === string2.length // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array[0] // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  return array [array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const novaArray = array.slice() //cria uma cópia do original
const ultimoElemento = novaArray.pop() //remove o ultimo elemento
const primeiroElemento = novaArray.shift() //remove o primeiro elemento
novaArray.unshift(ultimoElemento) //Põe o ultimo elemento no lugar do primeiro
novaArray.push(primeiroElemento)//Põe o primeiro elemento no lugar do ultimo
return novaArray

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase() // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual:"));
  const anoNasc = Number(prompt("Digite o ano de nascimento:"));
  const anoEmissao = Number(prompt("Digite o ano de emissão da carteira de identidade:"));

  const idade = anoAtual - anoNasc
  const anosCarteira = anoAtual - anoEmissao

  const RenovarAte20Anos = idade <= 20 && anosCarteira >= 5;
  const RenovarEntre20e50Anos = idade > 20 && idade <= 50 && anosCarteira >= 10;
  const RenovarAcima50Anos = idade > 50 && anosCarteira >= 15;

  const precisaRenovar = RenovarAte20Anos || RenovarEntre20e50Anos || RenovarAcima50Anos;

  console.log(precisaRenovar)
 

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multiplo400 = ano % 400 === 0// implemente sua lógica aqui
  const multiplo4 = ano % 4 === 0
  const multiplo100 = ano % 100 === 0

  return multiplo400 ? true : multiplo4 && !multiplo100

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem mais de 18 anos?") === "sim";
  const ensinoMedio = prompt("Você possui ensino médio completo?") === "sim";
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?") === "sim";
  
  const validade = idade && ensinoMedio && disponibilidade;
  
  console.log(validade)
}
