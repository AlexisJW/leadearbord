const user = document.querySelector('.input-name');
const score = document.querySelector('.input-score');

export default class POST_TO_API {
  constructor() {
    this.index = 0;
  }

    submitToApi = () => {
      document.querySelector('.submit-button').addEventListener('click', (clicked) => {
        clicked.preventDefault();
        if (clicked.target.classList.contains('submit-button')) {
          if (user.value === '' || score.value === '') {
            this.showError(user, 'Please fill in all fields');
          } else {
            this.send();
          }
        }
      });
    }

    send = async () => {
      const payloadArray = { user: user.value, score: Number(score.value) };
      const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bwl5MuXx9HP3kxRHXohk/scores/';
      fetch(
        requestURL,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(payloadArray),
        },
      );
      document.querySelector('#form-container').reset();
    }

    showMessage = (input, message, type) => {
      const TheMessage = input.parentNode.querySelector('.small-score');
      TheMessage.innerText = message;
      input.className = type ? 'success' : 'error';

      setTimeout(() => {
        TheMessage.innerText = '';
      }, 3000);

      return type;
    }

    showError = (input, message) => this.showMessage(input, message, false)
}