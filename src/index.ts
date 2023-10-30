const listaConvidados: string[] = ['Murillo', 'Paula', 'Kleiton', 'Júlia'];
const listaConvidantes: string[] = ['Rafael', 'Jhonatan', 'Roberto', 'Ana'];

function consultar():void {

    const convidante: string = (<HTMLInputElement>document.getElementById('convidante')).value;
    const convidado: string = (<HTMLInputElement>document.getElementById('convidado')).value;
    const resultado = (<HTMLParagraphElement>document.getElementById('resultado'));

    if (listaConvidados.includes(convidado) && listaConvidantes.includes(convidante)) {
        resultado.innerText = 'Você pode entrar!';
    }
    else {
        resultado.innerText = 'Você não pode entrar!';
    }

}