 //código inspirado na resolução do exercício parte II do 5.3 js
 //https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-eventos-gabarito/solutions/700128ff-5150-4320-9b33-875c7e6d5a2e/gabarito-dos-exercicios/b1d700e5-2b66-48c3-8af0-310cb17eacda?use_case=calendar
//requisito 7
let classeSelecionada = 'green'
function cliqueCor(event){
     const cores = document.querySelector('.selected');
     cores.classList.remove('selected');
    event.target.classList.add('selected');
    classeSelecionada = document.getElementsByClassName('selected')[0]
 }


coresParaEscolher = document.querySelectorAll('.color')
const preto = coresParaEscolher[0]
const rosa = coresParaEscolher[1]
const azul = coresParaEscolher[2]
const vermelho = coresParaEscolher[3]

preto.addEventListener('click', cliqueCor)

rosa.addEventListener('click', cliqueCor)

azul.addEventListener('click', cliqueCor)

vermelho.addEventListener('click', cliqueCor)


// requisito 8
function trocarCor(){
    let quadradinhos= document.getElementsByClassName('pixel')
    for(index=0; index<quadradinhos.length;index+=1){     
        let quadradoDaVez = quadradinhos[index]
        quadradoDaVez.addEventListener('click', function(event){
            classeSelecionada = document.getElementsByClassName('selected')[0]
            let cor = classeSelecionada.innerText
            console.log(classeSelecionada)
            event.target.style.backgroundColor= cor
        })
    }
}
trocarCor()
  

//requisito 9
const botaoReset= document.getElementById('clear-board')
botaoReset.addEventListener('click', function(event){
    let pixelAPintar = document.getElementsByClassName('pixel');
    
    for(let index =0; index < pixelAPintar.length; index+=1){
        pixelAPintar[index].style.backgroundColor = 'white'
    }
 
})