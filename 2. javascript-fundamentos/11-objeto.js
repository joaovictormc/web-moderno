const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['desconto legal'] = 0.40; //evitar atributos com espaço

console.log(prod1);

//criando a chave valor dentro da prorpia constante 
const prod2 = {
    nome: 'Camisa polo',
    preco: 79.99,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
};

console.log(prod2);