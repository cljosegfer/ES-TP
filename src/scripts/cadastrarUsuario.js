

function estaNulo(campo)
{
    if(campo.value == "")
    {
        alert("Preencha todos os campos!");
        campo.focus();
        return true;
    }
    return false;
}

function senhasCoincidem(senha, confirmacaoSenha)
{
    if(senha.value === confirmacaoSenha.value)
    {
        return true;
    }else{
        alert("As senhas não coincidem! Digite-as novamente!");
        senha.focus();
        return false;
    }
}

function cadastrarUsuario()
{
    //Verificando se todos os campos de input (exceto o de sexo) estão preenchidos
    var camposDeEntrada = document.querySelectorAll('input');
    for(var i=0; i<camposDeEntrada.length; i++)
    {
        if(estaNulo(camposDeEntrada[i]))
        {
            return false;
        }
    }

    //Validando a senha
    var senhas = document.querySelectorAll('input[type=password]');
    if(!senhasCoincidem(senhas[0], senhas[1]))
    {
        return false;
    }

    //Sexo não é um campo do tipo input, portanto, não está na variável camposDeEntrada
    var sexo = document.getElementById('sexo');
    
    //INSERIR NO BANCO DE DADOS
    var resposta = "";
    routes.post({
        username: document.getElementById("nomeUsuario").value,
        password: document.getElementById("senha").value,
        name: document.getElementById("nome").value,
        date_of_birth: document.getElementById("nascimento").value,
        email: document.getElementById("email").value,
        gender: document.getElementById("sexo").value
    }, resposta);
    console.log(resposta);
}