import { Action } from 'redux';

export enum ActionNames {
  CREATE = 'boards/create',
}

export interface CreateAction extends Action {
  type: ActionNames.CREATE;
  payload: {
    name: string;
  };
}

export const create = (name: string): CreateAction => ({
  type: ActionNames.CREATE,
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
  action: CreateAction,
): BoardsState {
  switch (action.type) {
    case ActionNames.CREATE:
      const nextId = initialState.boards.length + 1;
      return {
        ...state,
        boards: [
          ...initialState.boards,
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
