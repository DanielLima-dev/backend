async function retornarNome(){
    for(let i = 0; i < 100000000000000; i++)
    return "Jaime";
}

async function resultado(){
    let nome = await retornarNome();
    console.log(nome);
}


resultado();

// let result = retornarNome();
// let firstname;
// result.then(function(nome){
//     firstname = nome;
// })