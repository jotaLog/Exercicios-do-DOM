// Atividade 1 -------------------------------------------------------------------------------------------------------------------//
let button1 = document.getElementById("quad1") // Variavel Para Puxar e Programar o primeiro Quadrado
let button2 = document.getElementById("quad2") // Variavel Para Puxar e Programar o segundo Quadrado
let button3 = document.getElementById("quad3") // Variavel Para Puxar e Programar o Terceiro Quadrado
 
button1.addEventListener("click", function() { // Função de Click para mudar a cor do Quadrado
    button1.style.backgroundColor = "gray"; // Essa Linha troca pra cor desejada
})
 
button2.addEventListener("click", function() { // Função de Click para mudar a cor do Quadrado
    button2.style.backgroundColor = "brown"; // Essa Linha troca pra cor desejada
})
 
button3.addEventListener(`click`, function() { // Função de Click para mudar a cor do Quadrado
    button3.style.backgroundColor = "orange"; // Essa Linha troca pra cor desejada
})

// Atividade 2 -------------------------------------------------------------------------------------------------------------------//

let button4 = document.getElementById("contClick") // Linha que Chama o Botão pelo Id
let cont = document.getElementById("cont") // Linha que chama o Contador que mudara o numero na página
let buttonRes = document.getElementById("res") // Linha que chama o Botão para reiniciar a contagem
let contando = 0 // Linha para ajustar o Contador
 
button4.addEventListener("click", function() { // Função de Click para aumentar a quantidade de clicks
    contando = contando + 1 // Essa linha aumenta um na quantidade de clicks quando você clica
    cont.textContent = contando // Essa Linha altera o número de clicks no HTML
})
 
buttonRes.addEventListener("click", function() { // Função de Click para reiniciar a contagem de clicks
    contando = 0 // Essa linha reinicia a contagem
    cont.textContent = contando // E essa Linha diz ao HTML que a contagem foi zerada
})

// Atividade 3 -------------------------------------------------------------------------------------------------------------------//

let txt1 = document.getElementById("txtMost") // Botão Para mostrar e ocultar o texto
let buttonMost = document.getElementById("mostOlc") // botão que realiza a ação de mostrar e ocultar o texto
let check = false
 
buttonMost.addEventListener("click", function() { // Função de Click para mostrar e ocultar o texto
    if(check == false) { // Exibe o Teto
        txt1.innerText = "O Palmeira não tem Mundial"
        check = true
    } else { // Oculta o texto
        txt1.innerText = ""
        check = false
    }
})

// Atividade 4 -------------------------------------------------------------------------------------------------------------------//

let txt2 = document.getElementById("txtAlt") // Texto que será alterado
let buttonChangeTxt = document.getElementById("AlterarTxt") // Chama o Botão que chama o Prompt para mudar o texto
 
buttonChangeTxt.addEventListener("click", function() { // Função para trocar o Texto
   txt2.innerText = prompt("Troque o Texto:") // altera o Texto
})

// Atividade 5 -------------------------------------------------------------------------------------------------------------------//

let mostrarTecla = document.getElementById(`Key`)
 
document.addEventListener("keydown", function(event) { // Função para exibir a tecla pressionada
    mostrarTecla.innerText = `Pressionou: ${event.key}` // Na Pagina substitui o texto "Pressione uma tecla..." por "Pressiou" seguido da tecla pressionada
})

// Atividade 6 -------------------------------------------------------------------------------------------------------------------//

let buttonVote = document.getElementById("Vote") // botão para votar
let candidatoNome = document.getElementById("candidatoNome") // Exibe o nome do candidato conforme o número
let candidatoFoto = document.getElementById("candidatoFoto") // Exibe a foto do candidato conforme o número
let candidatoNumero // Número do candidato
let Dunga = 0 // candidato Dunga
let Tadala = 0 // Candidato Tadala
let SenhorDosPastéis = 0 // candidato Senhor Dos Pastéis
let OAventureiroDoBairroProibido = 0 // Candidato O aventureiro do bairro proibido
let nulo = 0
 
buttonVote.addEventListener("click", function() { // configura o botão vote
    candidatoNumero = prompt("Digite o número do candidato")
   
    if (candidatoNumero == 8) {
        candidatoNome.innerText = "Dunga" // muda ou mostra o nome do candidato
        candidatoFoto.innerHTML = `<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQoS6MVXky-Wbj6MbUf-PuxTa0sOVstvFCJSi8w0FMyUt3LoXG_" width="100" alt="Candidato Dunga">` //Muda ou mostra a foto do Candidato
        a = prompt("Confirmar")
        Dunga = Dunga + 1 // soma mais um no número de votos do candidato

    } else if (candidatoNumero == 18) {
        candidatoNome.innerText = "Tadala" // muda ou mostra o nome do candidato
        candidatoFoto.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1G80aKLgBx5MnME57vXyG0YTe9e2jRMNuQ&s" width="100" alt="Candidato Tadala">` //Muda ou mostra a foto do Candidato
        a = prompt("Confirmar")
        Tadala = Tadala + 1 // soma mais um no número de votos do candidato

    } else if (candidatoNumero == 37) {
        candidatoNome.innerText = "Senhor Dos Pastéis" // muda ou mostra o nome do candidato
        candidatoFoto.innerHTML = `<img src="https://i.redd.it/ghjuy2tfenl91.png" width="100" alt="Candidato Senhor dos Pastéis">` //Muda ou mostra a foto do Candidato
        a = prompt("Confirmar")
        SenhorDosPastéis = SenhorDosPastéis + 1 // soma mais um no número de votos do candidato

    } else if (candidatoNumero == 86) {
        candidatoNome.innerText = "O Aventureiro Do Bairro Proibido" // muda ou mostra o nome do candidato
        candidatoFoto.innerHTML = `<img src="https://i.ytimg.com/vi/4MB8Pjn8vyQ/maxresdefault.jpg" width="100" alt="O aventureiro Do Bairro Proibido">` //Muda ou mostra a foto do Candidato
        a = prompt("Confirmar")
        OAventureiroDoBairroProibido = OAventureiroDoBairroProibido + 1 // soma mais um no número de votos do candidato

    } else {
        alert("Voto nulo") // voto nulo
        a = prompt("Confirmar")
        nulo = nulo + 1 // soma mais um no número de votos nulos
    }
 
    console.log(`Dunga: ${Dunga} votos\nRPote: ${RPote} votos\nSenhor Dos Pastéis: ${SenhorDosPastéis} votos\nO Aventureiro do Bairro Proibido: ${OAventureiroDoBairroProibido} votos`) //substitui a variavel nome do candidato por exemplo: "${Dunga}" pelo seu número de votos
})