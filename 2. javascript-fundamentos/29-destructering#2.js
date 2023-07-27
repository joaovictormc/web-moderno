const [a] = [10]
console.log(a)

const [n1, n2, n3, n4, n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8,8], [9, 6, 8]] //o primeiro elemento do primeiro array foi ignorado, dentro do primeiro array tem outro array que 
                                          //que está ingnorando o primeiro elemento e pegando o segundo elemento
console.log(nota)