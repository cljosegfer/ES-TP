class Cabecalho {
    constructor()
    {
        this.cabecalho = {};
        this.disciplina = document.getElementById("disciplina");
        this.ementa = document.getElementById("ementa");
        this.descricao = document.getElementById("descricao");
        this.referencias = document.getElementById("referencias");
    }

    getValoresCabecalho()
    {
        this.cabecalho["disciplina"] = this.disciplina.value;
        this.cabecalho["ementa"] = this.ementa.value;
        this.cabecalho["descricao"] = this.descricao.value;
        this.cabecalho["referencias"] = this.referencias.value;

        return this.cabecalho;
    }

    estaNulo()
    {
        for(var campo in cabecalho)
        {
            if(cabecalho[campo].value === "")
            {
                alert("Preencha todos os campos!");
                cabecalho[campo].focus();
                return false;
            }
        }
    }
}

class TopicosPlano {
    constructor()
    {
        this.topicos = [];
    }

    adicionaLinha()
    {
        this.topicos.push(document.createElement("input"));

        var ultimaPosicao = this.topicos.length-1

        this.topicos[ultimaPosicao].setAttribute('type', "text");
        this.topicos[ultimaPosicao].setAttribute('size', "55");
        var container = document.querySelector("#linhas");
        container.appendChild(this.topicos[ultimaPosicao]);
    }

    removerLinha()
    {
        var container = document.querySelector("#linhas");
        container.removeChild(this.topicos[this.topicos.length-1]);
        this.topicos.pop();
    }

    getValoresLinhas()
    {
        this.valoresTopicos = [];
        for(var element in this.topicos)
        {
            this.valoresTopicos.push(this.topicos[element].value);
        }
        return this.valoresTopicos;
    }
}

function cadastrarPlano(cabecalho, topicos)
{
    if(!cabecalho.estaNulo())
    {
        return false;
    }
}

var topicos = new TopicosPlano();
var cabecalho = new Cabecalho();

document.getElementById("addLinha").onclick = function() {
    topicos.adicionaLinha();
}

document.getElementById("remLinha").onclick = function() {
    topicos.removerLinha();
}

document.getElementById("cadastrarPlano").onclick = cadastrarPlano(cabecalho, topicos);
