import util from '../../helpers/util';
import boardData from '../../helpers/data/boardsdata';

const boardBuilder = (boards) => {
  let domString = '';
  boards.forEach((board) => {
    domString += '<div class="card">';
    domString += '<div class="card-body">';
    domString += `${board.name}`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      boardBuilder(resp.data.boards);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards, boardBuilder };
