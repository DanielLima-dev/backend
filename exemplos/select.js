const UserAccessModel = require('./criando-model');

async function execute(){
    // SELECT * FROM store.user_acess//
    // let all = await UserAccessModel.findAll();
    // console.log(all)

    // * 

    // SELECT id, email FROM store.user_acess
    // let resultado = await UserAccessModel.findAll({
    //     attributes: ["id", "email"]
    // }) ;
    // console.log(resultado)

    // let resultado = await UserAccessModel.findAll({
    //     attributes:["id","password"],
    //     where: {
    //         email: "tiago@mail.com"
    //     }
        
    // });

    // let resultado = await UserAccessModel.findOne();

    // console.log(resultado)

    let resultado = await UserAccessModel.findByPk(3);
    console.log(resultado);
};


execute();