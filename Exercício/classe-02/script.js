const help = document.querySelector('img');
const faq = document.querySelector('.FAQ');

help.addEventListener('click', function (event) {
  const show = faq.style.display;
  console.log(show);

  if (faq.style.display !== 'flex') {
    faq.style.display = 'flex';
  } else {
    faq.style.display = 'none';
  }
});