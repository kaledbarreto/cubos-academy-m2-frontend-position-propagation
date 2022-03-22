const olhoAberto = document.querySelector('.olho-aberto');
const olhoFechado = document.querySelector('.olho-fechado');
const senhaInput = document.querySelector('#senha');

olhoFechado.addEventListener('click', function () {
  olhoFechado.style.display = 'none';
  olhoAberto.style.display = 'flex';
  senhaInput.type = 'text';
});

olhoAberto.addEventListener('click', function () {
  olhoAberto.style.display = 'none';
  olhoFechado.style.display = 'flex';
  senhaInput.type = 'password';
});