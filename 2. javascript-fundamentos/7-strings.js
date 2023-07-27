const escola = "Cod3r";

console.log(escola.charAt(4)); //busca o caractere
console.log(escola.charAt(5)); //nesse caso o caractere não existe, entao o js retorna um espaço vazio
console.log(escola.charCodeAt(3)); //retorna o caractere no formato da tabela ASCII ou UniCode
console.log(escola.indexOf('3'));

console.log(escola.substring(1)); //vai imprimir do indice 1 ate o indice 4
console.log(escola.substring(0, 3)); //imprime do indice 0 ate o indice 3 sem incluir o indice 3

console.log('Escola '.concat(escola).concat("!")); 
console.log(escola.replace(3, 'e')); //alterar o caractere da posição escolhida

console.log('Ana, Maria, Pedro'.split(',')); //transforma a string em um array
