"use strict";
const listaConvidados = ['Murillo', 'Paula', 'Kleiton', 'Júlia'];
const listaConvidantes = ['Rafael', 'Jhonatan', 'Roberto', 'Ana'];
function consultar() {
    const convidante = document.getElementById('convidante').value;
    const convidado = document.getElementById('convidado').value;
    const resultado = document.getElementById('resultado');
    if (listaConvidados.includes(convidado) && listaConvidantes.includes(convidante)) {
        resultado.innerText = 'Você pode entrar!';
    }
    else {
        resultado.innerText = 'Você não pode entrar!';
    }
}
