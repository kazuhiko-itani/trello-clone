import Boards, {
  BoardsState,
  CreateAction as BoardsActions,
} from './Pages/Boards/module';
import { createStore, combineReducers, Action, applyMiddleware } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const createRootReducer = () =>
  createStore(
    combineReducers({
      router: connectRouter(history),
      Boards,
    }),
    applyMiddleware(routerMiddleware(history)),
  );

export default createRootReducer;

export type ReduxState = {
  Boards: BoardsState;
};

export type ReduxAction = BoardsActions | Action;
