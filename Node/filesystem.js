const fs = require('node:fs');

let db = {
    products: [
        {
            name: "Iphone"
        }
    ]
}

let conteudoDoArquivo = fs.readFileSync('db.json', 'utf-8');
conteudoDoArquivo = JSON.parse(conteudoDoArquivo);
conteudoDoArquivo.products.push({idade: "18"});

fs.writeFileSync('db.json', JSON.stringify(conteudoDoArquivo, null, 2));

