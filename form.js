//Validar formulário
function validaFormulario() {

    let confirm = false;

    //pegar dados inseridos nos inputs
    let nome = document.getElementById("nomeForm");
    let email = document.getElementById("emailForm");
    let telefone = document.getElementById("telefoneForm");
    let opcao = document.getElementById("selectC");
    let mensagem = document.getElementById("mensagemC");

    // se o valor for vazio ou não estiver no padrão
    if (nome.value == "") {

        //alterar display do parágrafo de aviso, para ele aparecer na tela
        document.getElementById("aviso").style.display = "block"
        document.getElementById("avisoNome").style.display = "block";
        nome.style.border = "2px solid red";

        document.getElementById("aviso").focus();
        confirm = false;

        //retorna falso e não envia formulário
        //return false;
    }
    else {
        document.getElementById("avisoNome").style.display = "none";
        nome.style.border = "1px solid black";
        confirm = true;
    }

    if (email.value == "" || !emailValido(email.value)) {
        document.getElementById("aviso").style.display = "block"
        document.getElementById("avisoEmail").style.display = "block";
        email.style.border = "2px solid red";
        confirm = false;
        //return false;
    }
    else{
        document.getElementById("avisoEmail").style.display = "none";
        email.style.border = "1px solid black";
        confirm = true;
    }
    
    if (telefone.value == "" || !telefoneValido(telefone.value)) {
        document.getElementById("aviso").style.display = "block"
        document.getElementById("avisoTelefone").style.display = "block";
        telefone.style.border = "2px solid red";
        //return false;
        confirm = true;
    }
    else {
        document.getElementById("avisoTelefone").style.display = "none";
        telefone.style.border = "1px solid black";
        confirm = true;
    }
    
    if (mensagem.value == "") {
        document.getElementById("aviso").style.display = "block"
        document.getElementById("avisoMsg").style.display = "block";
        mensagem.style.border = "2px solid red";
        //return false;
        confirm = false;
        
    }
    else{
        document.getElementById("avisoMsg").style.display = "none";
        mensagem.style.border = "1px solid black";
        confirm = true;
    }

    if(confirm == true){
        alert("Dados enviados com sucesso!!");
    }

    //validar padrão do email
    function emailValido(email) {
        
        //padrão = ---@---.com
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        )
        if (emailRegex.test(email)) {
            return true;
        }
        return false;
    }
 
    //validar padrão de telefone
    function telefoneValido(telefone){

        //padrão = (XX)XXXXX-XXXX
        const telefoneRegex = new RegExp(
            /^\(\d{2,3}\)\d{5}-\d{4}$/
        )
        if (telefoneRegex.test(telefone)){
            return true;
        }
        return false;
    }
}

window.onload = () => {
    let valida = document.getElementById("btnContato");
    valida.addEventListener("click", validaFormulario)
}