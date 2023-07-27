const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome +'!';

//ACESSANDO A VARIAVEL USANDO O TEMPLATE STRING
const template = `
    Olá
    ${nome}!
`;
console.log(concatenacao, template);


//EXPRESSÕES MATEMÁTICAS 
console.log(`1 + 1 = ${1 + 1}`);


const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);