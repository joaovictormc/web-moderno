const funcs = [];

for (let i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i);
    });
}

funcs[2]();
funcs[8]();


/***
 * tem a ver com o conceito da função JS chamada cloger, ou seja,
 * a função tem consciencia do local que ela foi definida 
 */