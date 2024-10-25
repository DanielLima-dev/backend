const UserAccessModel = require('./criando-model');

async function execute(){
    let resultado = await UserAccessModel.create({
        email: "tiago@mail.com",
        password: "1234"
    });

    console.log(resultado.email)
};

execute();
