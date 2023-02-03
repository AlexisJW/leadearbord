export default class GETS_FROM_API {
  constructor() {
    this.index = 0;
  }

    refreshButton = () => {
      document.querySelector('button').addEventListener('click', (clicked) => {
        if (clicked.target.classList.contains('refresh-button')) {
          this.populate();
        }
      });
    }

    populate = async () => {
      const scoreList = document.querySelector('.show-score-list');
      const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bwl5MuXx9HP3kxRHXohk/scores/';
      const request = new Request(requestURL);
      const response = await fetch(request);
      const responseObj = await response.json();
      const resultObj = responseObj.result;
      scoreList.innerHTML = '';
      resultObj.forEach((obj) => {
        let star = '🏆';
        if (obj.score < 20) {
          star = '🏆';
        } else if (obj.score >= 20 && obj.score <= 30) {
          star = '🏆🏆';
        } else if (obj.score > 30 && obj.score <= 40) {
          star = '🏆🏆🏆';
        } else if (obj.score > 30 && obj.score <= 50) {
          star = '🏆🏆🏆🏆';
        } else {
          star = '🏆🏆🏆🏆🏆';
        }

        scoreList.innerHTML += `
        <div class="container-item">
          <span class="material-icons-outlined">
            account_circle
          </span>
          <span>
            ${obj.user}
          </span>
        
          <span>
            SCORE
          </span>
          <span>
            ${obj.score}
          </span>
          <span>
            ${star}
          </span>

        </div>
      `;
      });
    }
}