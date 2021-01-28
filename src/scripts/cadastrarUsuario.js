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

function cadastrar()
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
}