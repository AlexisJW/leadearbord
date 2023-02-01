import './style.css';

/*https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bwl5MuXx9HP3kxRHXohk/scores/ */
const createGame = async (gameName) => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
        method: 'POST',
        body: JSON.stringify({
            name: gameName,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const json = await response.json();
    console.log('name: ' + json.name + ' result: ' + json.result);
};