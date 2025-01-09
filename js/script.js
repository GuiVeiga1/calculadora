let d = document;

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
    d.querySelector('#btn_mais_menos') 
];

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        alert(botao.innerHTML);
    });
});



