class Usuario {
    constructor()
    {
        
    }
    estaNulo()
    {
        var camposDeEntrada = document.querySelectorAll('input');
        for(var campo in camposDeEntrada)
        {
            if(camposDeEntrada[campo].value == "")
            {
                alert("Preencha todos os campos!");
                camposDeEntrada[campo].focus();
                return false;
            }
        }
        return true;
    }

    validaSenhas()
    {
        var senhas = document.querySelectorAll('input[type=password]');
        if(senhas[0].value === senhas[1].value)
        {
            return true;
        }else{
            alert("As senhas não coincidem! Digite-as novamente!");
            senha.focus();
            return false;
        }
    }

    getDadosJSON()
    {
        return {
            username: document.getElementById("nomeUsuario").value,
            password: document.getElementById("senha").value,
            name: document.getElementById("nome").value,
            date_of_birth: document.getElementById("nascimento").value,
            email: document.getElementById("email").value,
            gender: document.getElementById("sexo").value
           };
       }
}

function cadastrarUsuario()
{
    var usuario = new Usuario();
    if(!usuario.estaNulo())
    {
        return false;
    }
    if(!usuario.validaSenhas())
    {
        return false;
    }
    console.log(usuario.getDadosJSON());
}
