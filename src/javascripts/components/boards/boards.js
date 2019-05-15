import util from '../../helpers/util';
import boardData from '../../helpers/data/boardsdata';
import pins from '../pins/pins';

const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error('you clicked a button', boardId);
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
  pins.initPins(boardId);
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};

const boardBuilder = (boards) => {
  let domString = '';
  boards.forEach((board) => {
    domString += `<div class="card col-3 p-2" id='${board.id}'>`;
    domString += '<div class="card-body">';
    domString += `${board.name}`;
    domString += '</div>';
    domString += '<button class="btn btn-dark text-light see-pins">Pins</button>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
  bindEvents();
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      boardBuilder(resp.data.boards);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards, boardBuilder };
