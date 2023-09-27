const datas = [];

function salvar(){
    //obtendo os campos da tela
    data = document.getElementById("data");
    distancia = document.getElementById("distancia");
    tempo = document.getElementById("tempo");
    ganhElevacao = document.getElementById("ganhoElevacao");

    //guardando os valores
    novaData = data.value;
    novaDistancia = distancia.value;
    novoTempo = tempo.value;
    novoGanhoElevacao = ganhElevacao.value;

    // Cria um objeto Date a partir da string de data
    dataDate = new Date(novaData);
    datas.push(dataDate);

    // Extrai o dia, mês e ano da data
    dia = String(dataDate.getDate()+1).padStart(2, '0');
    mes = String(dataDate.getMonth() + 1).padStart(2, '0'); // Adiciona 1 ao mês, pois os meses em JavaScript são baseados em zero (janeiro = 0, fevereiro = 1, etc.)
    ano = dataDate.getFullYear();

    // Formata a data no formato "dd/mm/aaaa"
    dataFormatada = `${dia}/${mes}/${ano}`;

    corrida = {"data":dataFormatada, "distancia":novaDistancia, "tempo":novoTempo, "ganhoElevacao":novoGanhoElevacao}
    adicionarCorrida(corrida)
 
    //zerando os campos
    data.value="";
    distancia.value="";
    tempo.value="";
    ganhElevacao.value="";
    
    // while (td.rows.length > 0) {
    //     td.deleteRow(0);
    // }
    buscarCorridas()    

}

function adicionarCorrida(c){
    corridas = localStorage.getItem('corridas');
    if(corridas == null)
    {
        corridas = [];
    }
    else
    {
        corridas = JSON.parse(corridas);
    }
    corridas[corridas.length] = c;
    localStorage.setItem('corridas', JSON.stringify(corridas));
    //alert(contatos.length);
    // alert('Contato ' + c.nome +' cadastrado!');
}

function buscarCorridas(){
    if(localStorage.getItem('corridas') != null){
        tabela = document.getElementById("tbody")
        tabela.innerHTML = ""
        let c = localStorage.getItem('corridas')
        corridas = JSON.parse(c)
        corridas.forEach(function(cor) {
            novaData = cor.data;
            novaDistancia = cor.distancia;
            novoTempo = cor.tempo;
            novoGanhoElevacao = cor.ganhoElevacao;
                //criando o tr da tabela
            tr = document.createElement("tr")

            //criando os itens da tabela
            novoItem1 = document.createElement("td");
            novoItem2 = document.createElement("td");
            novoItem3 = document.createElement("td");
            novoItem4 = document.createElement("td");
            
            //criando os nos com os dados dos inputs
            node1 = document.createTextNode(novaData);
            node2 = document.createTextNode(novaDistancia);
            node3 = document.createTextNode(novoTempo);
            node4 = document.createTextNode(novoGanhoElevacao);
            
            //setando os nos em cada item da tabela
            novoItem1.appendChild(node1);
            novoItem2.appendChild(node2);
            novoItem3.appendChild(node3);
            novoItem4.appendChild(node4);
            
            //setando os itens na linha da tabela
            tr.appendChild(novoItem1);
            tr.appendChild(novoItem2);
            tr.appendChild(novoItem3);
            tr.appendChild(novoItem4);

            //setando as linhas na tabela
            tabela.appendChild(tr)
        });
    }
}

function remover(item){
    //criando o formulario de apagar    
    var resultado = confirm("Deseja excluir a linha inteira");

    //veriicando se quer apagar
    if(resultado){
        item.style.display = "none";
    }
}

function filtrarPorData(){
    thData = document.getElementById('data-titulo-tabela');
    tabela = document.getElementById('tabela');

    dataParaFiltrar = thData.textContent;
    linhas = tabela.getElementsByTagName('tr');

    datas.sort(compararDatas);
}

function compararDatas(a, b) {
    const dataA = new Date(a);
    const dataB = new Date(b);
    return dataA.getTime() - dataB.getTime();
}



document.addEventListener('DOMContentLoaded', function() {
    selectMonths = document.getElementById('selectMeses');
     // Array com os nomes dos meses
     meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    // Loop para criar as opções do select
    for (let i = 0; i < meses.length; i++) {
        option = document.createElement('option');
        option.value = i + 1; // Os valores começam em 1 (janeiro é 1)
        option.textContent = meses[i];
        selectMonths.appendChild(option);
    }
});

// function selectMeses(){
//     selectMonths = document.getElementById('selectMeses');

   
// }

// window.addEventListener('load', selectMeses());