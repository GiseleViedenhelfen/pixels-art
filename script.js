 //código inspirado na resolução do exercício parte II do 5.3 js
 //https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-eventos-gabarito/solutions/700128ff-5150-4320-9b33-875c7e6d5a2e/gabarito-dos-exercicios/b1d700e5-2b66-48c3-8af0-310cb17eacda?use_case=calendar
 function cliqueCor(event){
     const cores = document.querySelector('.selected')
     cores.classList.remove('selected');
    event.target.classList.add('selected');
 }
coresParaEscolher = document.querySelectorAll('.color')
coresParaEscolher[0].addEventListener('click', cliqueCor)
coresParaEscolher[1].addEventListener('click', cliqueCor)
coresParaEscolher[2].addEventListener('click', cliqueCor)
coresParaEscolher[3].addEventListener('click', cliqueCor)