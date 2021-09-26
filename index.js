window.onload = function() {
    alert("Olá seja bem vindo ao meu site");
};

sleep()

function sleep(n) {
const imagem = document.querySelector("#imagem");

const botao = document.querySelector ("#btn"); // criar uma variável constante para que o seletor encontre onde quero que tenha a função

const frase = document.querySelector ("#fraseprincipal");

const nome = document.querySelector ("#nome");

const audio = document.querySelector ("#play");

const audio1 = document.querySelector ("#play1")



btn.addEventListener ("click", function img(){ 
   
   
    if (botao.value == 'primeiro'){
        imagem.src = "ronaldo_mal.png"
        nome.innerText ="Cassio"
        frase.innerText = "Quando o corinthians toma um gol!"
        botao.value = 'segundo'
        audio.play()
              
    }

    else if (botao.value == "segundo"){
        imagem.src = "ronaldo_Gol.png"
        frase.innerText = "Quando o timão faz um GOL!"
        botao.value = "terceiro"
        audio.scrollTop
        audio1.play()
        sleep(500000)
        
    }
    else {
        imagem.src = "ronaldo.png"
        frase.innerText = "Ronaldo assistindo um jogo normal"
        botao.value = "primeiro"
      }
  });
};
  