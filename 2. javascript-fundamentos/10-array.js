const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

//acrescentar um indice no array
valores[4] = 10;
console.log(valores);

console.log(valores.length);//mostra quantos elementos tem o array

//adicionando outros tipos de elementos no mesmo array
valores.push({id: 3}, false, null, 'teste');
console.log(valores);


console.log(valores.pop());//pega o ultimo valor do array, remove e exibe separadamente

//deletar certa posição do array
delete valores[0];
console.log(valores);


console.log(typeof valores);