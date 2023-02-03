// import createGame from '../modules/createGameName';
import './style.css';
import GETS_FROM_API from '../modules/getScoresDataFromApi.js';
import POST_TO_API from '../modules/postToApi.js';

// createGameApiName('AlexisGame');

window.addEventListener('DOMContentLoaded', () => {
  const GetData = GETS_FROM_API;
  const PostData = POST_TO_API;

  const getObjFromApi = new GetData();
  const postObjToApi = new PostData();

  getObjFromApi.refreshButton();
  postObjToApi.submitToApi();
  getObjFromApi.populate();
});