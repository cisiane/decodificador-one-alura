// Função para criptografar o texto
function criptografar() {
  var texto = document.querySelector('.text-area').value;
  var textoCriptografado = '';

  for (var i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case 'e':
        textoCriptografado += 'enter';
        break;
      case 'i':
        textoCriptografado += 'imes';
        break;
      case 'a':
        textoCriptografado += 'ai';
        break;
      case 'o':
        textoCriptografado += 'ober';
        break;
      case 'u':
        textoCriptografado += 'ufat';
        break;
      default:
        textoCriptografado += texto[i];
    }
  }

  document.querySelector('.text-area').value = textoCriptografado;
  document.querySelector('.mensagem').value = textoCriptografado;
}

// Função para descriptografar o texto
function descriptografar() {
  var textoCriptografado = document.querySelector('.text-area').value;
  var textoDescriptografado = '';

  var i = 0;
  while (i < textoCriptografado.length) {
    if (textoCriptografado.substr(i, 5) === 'enter') {
      textoDescriptografado += 'e';
      i += 5;
    } else if (textoCriptografado.substr(i, 4) === 'imes') {
      textoDescriptografado += 'i';
      i += 4;
    } else if (textoCriptografado.substr(i, 2) === 'ai') {
      textoDescriptografado += 'a';
      i += 2;
    } else if (textoCriptografado.substr(i, 4) === 'ober') {
      textoDescriptografado += 'o';
      i += 4;
    } else if (textoCriptografado.substr(i, 4) === 'ufat') {
      textoDescriptografado += 'u';
      i += 4;
    } else {
      textoDescriptografado += textoCriptografado[i];
      i++;
    }
  }

  document.querySelector('.text-area').value = textoDescriptografado;
  document.querySelector('.mensagem').value = textoDescriptografado;
}

// Função para copiar o texto criptografado
function copiarTexto() {
  var textoCriptografado = document.querySelector('.mensagem').value;
  
  if (textoCriptografado) {
    navigator.clipboard.writeText(textoCriptografado)
      .then(function() {
        alert('Texto copiado!');
      })
      .catch(function(error) {
        console.error('Erro ao copiar o texto:', error);
      });
  }
}

// Função para atualizar o texto da segunda textarea
function atualizarTexto() {
  var texto = document.querySelector('.text-area').value;
  document.querySelector('.mensagem').value = texto;
}

var textarea = document.querySelector('.text-area');
textarea.addEventListener('input', atualizarTexto);



