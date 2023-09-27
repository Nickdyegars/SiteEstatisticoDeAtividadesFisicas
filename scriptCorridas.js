function salvar(){
    alert("Não é possivel salvar dados nessa página")
}

function filtrarPorData(){
    if(localStorage.getItem('corridas') != null){
        tabela = document.getElementById("tbody")
        tabela.innerHTML = ""
        let c = localStorage.getItem('corridas')
        corridas = JSON.parse(c)
        spinnerData = document.getElementById("spinnerData")
        mesDesejado = spinnerData.value
        corridas.forEach(function(cor) {
            const partes = cor.data.split('/');
            const mes = parseInt(partes[1], 10);            
            if(mesDesejado == mes){
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
        }});  
    }
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