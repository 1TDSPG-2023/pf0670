//Gerando um token com Math
let tokenGerado = Math.random().toString(16).substring(2) ;
console.log(tokenGerado);

//Declarando Objetos
const usuario1 = {
    nomeUsuario : "denden",
    senhaUsuario: "12345",
    gravaDados: true,
    token: tokenGerado
}

tokenGerado = Math.random().toString(16).substring(2) ;
console.log(tokenGerado);

const usuario2 = {
    nomeUsuario : "gege",
    senhaUsuario: "12345",
    gravaDados: true,
    token: tokenGerado
}

let novoNomePropriedade = "tokenzinho"
usuario1["token"] = 12;

console.log(usuario1.tokenzinho);


let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);


addEventListener("click", (evt)=>{

    if(evt.target.id == "btnSubmit"){
        
        const inputUser = document.querySelector("#idUser");
        const inputPass = document.querySelector("#idPass");
        //console.log(inputUser.value)

        try{

        listaDeUsuarios.forEach((usuario)=>{


        if(inputUser.value == usuario.nomeUsuario && inputPassa.value == usuario.senhaUsuario){
            throw("VALIDADO");
        }

    });

    throw "NÃO VALIDADO"
        
    } catch (msg){
        const msgError = document.querySelector("#msgError");
        if(msg == "VALIDADO"){
            msgError.setAttribute("style","color:#00ff00;")
            msgError.innerHTML = "<span><strong>Login efetuado com Sucesso! </strong></span>"
        }else{
            msgError.setAttribute("style","color:#ff0000;")
            msgError.innerHTML = "<span><strong>Usuario ou senha invalidos! </strong></span>"
        }

    }

    }
});