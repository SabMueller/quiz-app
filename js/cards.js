const answerButtons = document.querySelectorAll('.card__button');
const funfactsButtons = document.querySelectorAll('.card__button-facts');
const answers = document.querySelectorAll('.card__answer');
const facts = document.querySelectorAll('.card__funfacts');

answerButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    answers[index].classList.toggle('hidden');
  });
});

funfactsButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    facts[index].classList.toggle('hidden');
  });
});
