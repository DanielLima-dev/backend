const fs = require('fs');

async function execute(){
    let response = await fetch('https://picsum.photos/300/400');
    const buffer = Buffer.from(await response.arrayBuffer);
    
}