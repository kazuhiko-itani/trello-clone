import { Action } from 'redux';

export enum ActionNames {
  ADD = 'boards/add',
}

export interface AddAction extends Action {
  type: ActionNames.ADD;
  payload: {
    name: string;
  };
}

export const add = (name: string): AddAction => ({
  type: ActionNames.ADD,
  payload: {
    name,
  },
});

interface Board {
  id: number;
  name: string;
}

export interface BoardsState {
  boards: Board[];
}

export const initialState: BoardsState = {
  boards: [],
};

export default function reducer(
  state: BoardsState = initialState,
  action: AddAction,
): BoardsState {
  switch (action.type) {
    case ActionNames.ADD:
      const nextId = initialState.boards.length + 1;
      return {
        ...state,
        boards: [
          ...state.boards,
          {
            id: nextId,
            name: action.payload.name,
          },
        ],
      };
    default:
      return state;
  }
}
