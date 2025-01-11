let d = document
let resposta  = d.querySelector('#resposta')
let calculo = d.querySelector('#calculo')

let botoes = [
    d.querySelector('#btn_0'),
    d.querySelector('#btn_1'),
    d.querySelector('#btn_2'),
    d.querySelector('#btn_3'),
    d.querySelector('#btn_4'),
    d.querySelector('#btn_5'),
    d.querySelector('#btn_6'),
    d.querySelector('#btn_7'),
    d.querySelector('#btn_8'),
    d.querySelector('#btn_9'),
    d.querySelector('#btn_soma'),
    d.querySelector('#btn_igual'),
    d.querySelector('#btn_menos'),
    d.querySelector('#btn_multi'),
    d.querySelector('#btn_limpar'),
    d.querySelector('#btn_divisao'),
    d.querySelector('#btn_virgula'),
    d.querySelector('#btn_info') 
];

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        if(botao.id === "btn_limpar"){
           limpar();
        }else{
            if(botao.id === "btn_info"){
            
            }else if(botao.id === "btn_igual"){
                if(resposta.innerHTML != "0" || calculo.innerHTML == ""){
                    limpar();
                }else{
                    if(verifacaSetemIgual()){
                      
                    }else{
                        calculo.innerHTML += botao.innerHTML
                    }
                }
            }
            else{
                if(verifacaSetemIgual()){

                }else{
                    calculo.innerHTML += botao.innerHTML
                }
                
            }
        }
    });
  
});


botoes[11].addEventListener('click', function () {
    let expressao = calculo.innerHTML.replace('=', ''); 

    expressao = expressao.replace(/÷/g, '/');
    expressao = expressao.replace(/×/g, '*');

    let resultado = eval(expressao);
    let resultadoFormatado = resultado.toLocaleString('pt-BR'); 
    resposta.innerHTML = resultadoFormatado; 
});


function verifacaSetemIgual(){
   if(calculo.innerHTML.includes('=')){
        return true
    }else{
        return false
    }
}

function limpar(){
    calculo.innerHTML =  ""
    resposta.innerHTML = "0"
}






