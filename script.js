 function criptografar(){
    var texto = document.getElementById('inputText').value.toLowerCase();
   
    var txtCripto = texto.replace(/e/ig, 'enter').replace(/o/ig, 'ober').replace(/i/ig, 'ines').replace(/a/ig, 'ai').replace(/u/ig, 'ufat'); 

    document.getElementById('imgder').style.display = 'none';
    document.getElementById('texto').style.display = 'none';
    document.getElementById('texto2').innerHTML = txtCripto;
    document.getElementById('copiar').style.display = 'show';
    document.getElementById('copiar').style.display = 'inherit';

}

function descriptografar(){
    var texto = document.getElementById('inputText').value.toLowerCase();
   
    var txtCripto = texto.replace(/enter/ig, 'e').replace(/ober/ig, 'o').replace(/ines/ig, 'i').replace(/ai/ig, 'a').replace(/ufat/ig, 'u'); 

    document.getElementById('imgder').style.display = 'none';
    document.getElementById('texto').style.display = 'none';
    document.getElementById('texto2').innerHTML = txtCripto;
    document.getElementById('copiar').style.display = 'show';
    document.getElementById('copiar').style.display = 'inherit';

}

function copiar(){
    var conteudo = document.querySelector('#texto2');
    conteudo.select();
    document.execCommand('copy')

    alert('Texto copiado!')
}

