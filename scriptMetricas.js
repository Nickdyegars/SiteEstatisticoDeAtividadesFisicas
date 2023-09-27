function metricas(){
    h5distanciaTotal = document.getElementById("h5DistanciaTotal")
    h5TempoPercorrido = document.getElementById("h5TempoPercorrido")
    h5TotalDias = document.getElementById("h5TotalDias")
    h5MédiaQuilometros = document.getElementById("h5MédiaQuilometros")
    h5CorridaMaisLonga = document.getElementById("h5CorridaMaisLonga")
    h5CorridaMaisRapida = document.getElementById("h5CorridaMaisRapida")

    h5distanciaTotal.innerHTML = "0Km"
    h5TempoPercorrido.innerHTML = "0 Horas"
    h5TotalDias.innerHTML = "0"
    h5MédiaQuilometros.innerHTML = "0Km"
    h5CorridaMaisLonga.innerHTML = "0Km"
    h5CorridaMaisRapida.innerHTML = "0Km"

    let c = localStorage.getItem('corridas')
    corridas = JSON.parse(c)
    spinnerData = document.getElementById("spinnerData")
    mesDesejado = spinnerData.value

    totalPercorrido = 0
    totalHoras = 0
    totalDias = 0
    mediaQuilometros = 0
    cont=0
    maiorCorrida = 0
    corridas.forEach(function(cor) {
        const partes = cor.data.split('/');
        const mes = parseInt(partes[1], 10);            
        if(mesDesejado == mes){
            totalPercorrido += Number(cor.distancia)
            totalHoras += Number(cor.tempo)
            totalDias++
            cont++
            if(cor.distancia > maiorCorrida){
                maiorCorrida = Number(cor.distancia)
            }
        }
    })
    if(totalPercorrido!=0){
        mediaQuilometros = totalPercorrido/cont
    }

    h5distanciaTotal.innerHTML = totalPercorrido+"Km"
    h5TempoPercorrido.innerHTML = totalHoras+" Horas"
    h5TotalDias.innerHTML = totalDias
    h5MédiaQuilometros.innerHTML = mediaQuilometros+"Km"
    h5CorridaMaisLonga.innerHTML = maiorCorrida+"Km"
}

// function totalPercorrido(cor){
//     totalPercorrido += Number(cor.distancia)
// }