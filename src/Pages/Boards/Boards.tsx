import * as React from 'react';
import { BoardsState } from './module';
import { ActionDispatcher } from './Container';

interface Props {
  value: BoardsState;
  actions: ActionDispatcher;
}

export const Boards: React.FC<Props> = props => {
  const [create, setCreate] = React.useState<Boolean>(false);
  const [boardName, setBoardName] = React.useState<string>('');

  const handleCreate = () => {
    if (!boardName) return;

    props.actions.createBoard(boardName);
  };

  return (
    <div>
      {create ? (
        <div>
          <h3>Creating a Board</h3>
          <span onClick={() => setCreate(false)}>close</span>
          <p>what shall we call the board?</p>
          <input
            type="text"
            value={boardName}
            onChange={e => setBoardName(e.target.value)}
          />
          <div>
            <button onClick={() => setCreate(false)}>Cancel</button>
            <button onClick={handleCreate}>Create</button>
          </div>
        </div>
      ) : (
        <div onClick={() => setCreate(true)}>
          <h3>Create New Board...</h3>
        </div>
      )}

      {props.value.boards.map(board => {
        return <div key={board.id}>{board.name}</div>;
      })}
    </div>
  );
};
